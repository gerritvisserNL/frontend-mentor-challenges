import "./reset.css";
import "./style.css";

const fetchData = async () => {
  try {
    const res = await fetch("./data/data.json");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error loading data:", err);
  }
};

const createBar = (item, maxAmount, maxBarHeight) => {
  const barContainer = document.createElement("div");
  barContainer.classList.add("bar-container");

  // wrapper for bar + tooltip
  const barWrapper = document.createElement("div");
  barWrapper.style.position = "relative"; // tooltip relative to his wrapper
  barWrapper.style.width = "100%";

  const bar = document.createElement("div");
  bar.classList.add("bar");
  // height in px with scale factor
  bar.style.height = `${(item.amount / maxAmount) * maxBarHeight}px`;

  if (item.amount === maxAmount) bar.classList.add("bar--max");

  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.textContent = `$${item.amount}`;

  // tooltip in dezelfde wrapper als de bar, zodat absolute positioning werkt
  barWrapper.append(bar, tooltip);

  const label = document.createElement("p");
  label.classList.add("day-label");
  label.textContent = item.day;

  // hover events voor tooltip
  bar.addEventListener("mouseenter", () => (tooltip.style.opacity = "1"));
  bar.addEventListener("mouseleave", () => (tooltip.style.opacity = "0"));

  // barWrapper en label toevoegen aan container
  barContainer.append(barWrapper, label);

  return barContainer;
};

const renderChart = async () => {
  const chart = document.querySelector(".expenses__chart");
  const data = await fetchData();
  if (!data) return;

  const maxAmount = Math.max(...data.map((item) => item.amount));
  const chartHeight = chart.clientHeight; // werkelijke hoogte
  const maxBarHeight = chartHeight * 0.7; // hoogste bar = 70% van chart height

  data.forEach((item) => {
    const bar = createBar(item, maxAmount, maxBarHeight);
    chart.append(bar);
  });
};

renderChart();

// EXTRA: calculate and display the total weekly spending dynamically
const calculateWeeklySpending = async () => {
  const data = await fetchData();
  if (!data) return;

  const total = data.reduce((sum, item) => sum + item.amount, 0);
  return total;
};

const displayWeeklyTotal = async () => {
  const weeklyTotalEl = document.querySelector(".expenses__summary-amount");

  const total = await calculateWeeklySpending();
  weeklyTotalEl.textContent = "$" + total;
};

displayWeeklyTotal();
