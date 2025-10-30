import "./reset.css";
import "./style.css";

const fetchData = async () => {
  try {
    const res = await fetch("./data/data.json");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("An error occured: ", err);
  }
};

// calling fetchData
const data = await fetchData();

// Function to create the bars of chart
const createBar = (item, maxAmount, maxBarHeight) => {
  const barContainer = document.createElement("div");
  barContainer.classList.add("bar-container");

  const barWrapper = document.createElement("div");
  barWrapper.classList.add("bar-wrapper");

  const bar = document.createElement("div");
  bar.classList.add("bar");

  const barHeight = (item.amount / maxAmount) * maxBarHeight;
  bar.style.height = `${barHeight}px`;

  if (item.amount === maxAmount) bar.classList.add("bar--max");

  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.textContent = `$${item.amount}`;

  const label = document.createElement("p");
  label.classList.add("day-label");
  label.textContent = item.day;

  barWrapper.append(bar, tooltip);
  barContainer.append(barWrapper, label);

  barWrapper.addEventListener("mouseenter", () => (tooltip.style.opacity = 1));
  barWrapper.addEventListener("mouseleave", () => (tooltip.style.opacity = 0));

  return barContainer;
};

// Function to render Chart
const renderChart = () => {
  const chart = document.querySelector(".expenses__chart");

  const maxAmount = Math.max(...data.map((item) => item.amount));
  const chartHeight = chart.clientHeight;
  const maxBarHeight = chartHeight * 0.7;

  data.forEach((item) => {
    const barEl = createBar(item, maxAmount, maxBarHeight);
    chart.append(barEl);
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
