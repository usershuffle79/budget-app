"use strict";

/******************************************************************************
 * CONFIGURATION
 ******************************************************************************/

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwCEXgnd39Jf0rdslYnXIpKyWdZYopEew3UqqL9tedXlzpTJoZpbFYCuI2WAW8TjC9L/exec";

const SUCCESS_DISPLAY_MS = 1500;


/******************************************************************************
 * DOM ELEMENTS
 ******************************************************************************/

const elements = {
    dashboardModeNav: document.getElementById("dashboardModeNav"),
  showOverviewButton: document.getElementById("showOverviewBtn"),
  showExploreButton: document.getElementById("showExploreBtn"),

  overviewPanel: document.getElementById("overviewPanel"),
  explorePanel: document.getElementById("explorePanel"),

  resetExploreButton: document.getElementById("resetExploreBtn"),

  exploreYear: document.getElementById("exploreYear"),
  explorePeriod: document.getElementById("explorePeriod"),
  explorePerson: document.getElementById("explorePerson"),
  exploreCategory: document.getElementById("exploreCategory"),
  exploreItem: document.getElementById("exploreItem"),
  exploreType: document.getElementById("exploreType"),
  exploreNeedWant: document.getElementById("exploreNeedWant"),
  explorePetGroup: document.getElementById("explorePetGroup"),
  explorePet: document.getElementById("explorePet"),
  exploreSearch: document.getElementById("exploreSearch"),
  exploreMeasure: document.getElementById("exploreMeasure"),
  exploreBreakdown: document.getElementById("exploreBreakdown"),
  exploreMetric: document.getElementById("exploreMetric"),

exploreDrilldown:
  document.getElementById(
    "exploreDrilldown"
  ),

clearExploreDrilldown:
  document.getElementById(
    "clearExploreDrilldown"
  ),

exploreDrilldownText:
  document.getElementById(
    "exploreDrilldownText"
  ),

exploreMonthGroup:
  document.getElementById(
    "exploreMonthGroup"
  ),

exploreMonth:
  document.getElementById(
    "exploreMonth"
  ),

exploreWeekGroup:
  document.getElementById(
    "exploreWeekGroup"
  ),

exploreWeek:
  document.getElementById(
    "exploreWeek"
  ),

exploreActiveFilters:
  document.getElementById(
    "exploreActiveFilters"
  ),

exploreFilterChips:
  document.getElementById(
    "exploreFilterChips"
  ),

  customDateControls: document.getElementById("customDateControls"),
  exploreStartDate: document.getElementById("exploreStartDate"),
  exploreEndDate: document.getElementById("exploreEndDate"),

  exploreTotalLabel: document.getElementById("exploreTotalLabel"),
  exploreTotal: document.getElementById("exploreTotal"),
  exploreCountLabel: document.getElementById("exploreCountLabel"),
  exploreCount: document.getElementById("exploreCount"),
  exploreAverageLabel: document.getElementById("exploreAverageLabel"),
  exploreAverage: document.getElementById("exploreAverage"),
  exploreAverageByBreakdown: document.getElementById("exploreAverageByBreakdown"),

  exploreComparisonCard: document.getElementById("exploreComparisonCard"),
  exploreComparisonTitle: document.getElementById("exploreComparisonTitle"),
  exploreComparisonChange: document.getElementById("exploreComparisonChange"),
  exploreComparisonCurrentLabel: document.getElementById("exploreComparisonCurrentLabel"),
  exploreComparisonCurrent: document.getElementById("exploreComparisonCurrent"),
  exploreComparisonPreviousLabel: document.getElementById("exploreComparisonPreviousLabel"),
  exploreComparisonPrevious: document.getElementById("exploreComparisonPrevious"),
  exploreComparisonNote: document.getElementById("exploreComparisonNote"),

  exploreChartCanvas: document.getElementById("exploreChart"),
  exploreChartTitle: document.getElementById("exploreChartTitle"),
  exploreChartSubtitle: document.getElementById("exploreChartSubtitle"),
  exploreChartEmpty: document.getElementById("exploreChartEmpty"),

  exploreTableBody: document.getElementById("exploreTableBody"),
  exploreTableDescription: document.getElementById("exploreTableDescription"),

  mobileSortField: document.getElementById("mobileSortField"),
  mobileSortDirection: document.getElementById("mobileSortDirection"),
  addMobileSortButton: document.getElementById("addMobileSortBtn"),
  resetMobileSortButton: document.getElementById("resetMobileSortBtn"),
  mobileSortSummary: document.getElementById("mobileSortSummary"),

  transactionDetailDialog: document.getElementById("transactionDetailDialog"),
  closeTransactionDetailButton: document.getElementById("closeTransactionDetailBtn"),
  transactionDetailTitle: document.getElementById("transactionDetailTitle"),
  detailDate: document.getElementById("detailDate"),
  detailAmount: document.getElementById("detailAmount"),
  detailPerson: document.getElementById("detailPerson"),
  detailCategory: document.getElementById("detailCategory"),
  detailItem: document.getElementById("detailItem"),
  detailType: document.getElementById("detailType"),
  detailNeedWant: document.getElementById("detailNeedWant"),
  detailNotes: document.getElementById("detailNotes"),

  refreshDashboardButton: document.getElementById("refreshDashboardBtn"),
  dashboardStatus: document.getElementById("dashboardStatus"),
  dashboardFilters: document.getElementById("dashboardFilters"),
  dashboardContent: document.getElementById("dashboardContent"),

  dashboardYear: document.getElementById("dashboardYear"),
  dashboardPeriod: document.getElementById("dashboardPeriod"),
  dashboardPerson: document.getElementById("dashboardPerson"),

  kpiIncome: document.getElementById("kpiIncome"),
  kpiExpenses: document.getElementById("kpiExpenses"),
  kpiInvestments: document.getElementById("kpiInvestments"),
  kpiRemaining: document.getElementById("kpiRemaining"),
  kpiSavingsRate: document.getElementById("kpiSavingsRate"),
  kpiNeedsWants: document.getElementById("kpiNeedsWants"),

    moneyFlowCanvas: document.getElementById("moneyFlowChart"),
    categoryCanvas: document.getElementById("categoryChart"),
    needsWantsCanvas: document.getElementById("needsWantsChart"),
    spendingTrendCanvas: document.getElementById("spendingTrendChart"),

    moneyFlowEmpty: document.getElementById("moneyFlowEmpty"),
    categoryChartEmpty: document.getElementById("categoryChartEmpty"),
    needsWantsEmpty: document.getElementById("needsWantsEmpty"),
    spendingTrendEmpty: document.getElementById("spendingTrendEmpty"),

  selectionDescription: document.getElementById("selectionDescription"),
  transactionCount: document.getElementById("transactionCount"),
  recentTransactions: document.getElementById("recentTransactions"),

  formView: document.getElementById("formView"),
  dashboardView: document.getElementById("dashboardView"),
  showFormButton: document.getElementById("showFormBtn"),
  showDashboardButton: document.getElementById("showDashboardBtn"),

  form: document.getElementById("budgetform"),
  category: document.getElementById("category"),
  item: document.getElementById("item"),
  notes: document.getElementById("notes"),
  date: document.getElementById("date"),
  amount: document.getElementById("amount"),
  type: document.getElementById("Type"),
  need: document.getElementById("need"),
  want: document.getElementById("want"),
  incomeClass: document.getElementById("incomeClass"),
  savingsClass: document.getElementById("savingsClass"),
  previewContainer: document.getElementById("previewContainer"),
  previewContent: document.getElementById("previewContent"),
  receiptDate: document.getElementById("receiptDate"),
  receiptAmount: document.getElementById("receiptAmount"),
  editButton: document.getElementById("editBtn"),
  confirmButton: document.getElementById("confirmBtn"),
  success: document.getElementById("successMessage")
};

let pendingFormData = null;
let isSubmitting = false;


/******  Added: Chart State Variables = Info about Fetching, Dupes, etc. [8/16/2026 ]******/
let dashboardTransactions = [];
let dashboardMetadata = null;

let dashboardLoaded = false;
let dashboardLoading = false;
let dashboardDataStale = true;

let moneyFlowChart = null;
let categoryChart = null;
let needsWantsChart = null;
let spendingTrendChart = null;


let exploreChart = null;
let exploreDrilldown = null;

let exploreSorts = [
  {
    field: "date",
    direction: "desc"
  }
];


/******************************************************************************
 * CHART CONFIGURATION
 ******************************************************************************/

if (
  typeof Chart !== "undefined" &&
  typeof ChartDataLabels !== "undefined"
) {
  Chart.register(ChartDataLabels);
}


/******************************************************************************
 * MASTER DATA MODEL
 ******************************************************************************/

const CATEGORY_DATA = {
  income: {
    items: [
      { label: "Income", value: "income", type: "income", needWant: "Income" }
    ]
  },

  home: {
    items: [
      { label: "Electricity", value: "electricity", type: "bill", needWant: "Need" },
      { label: "Gasoline", value: "gasoline", type: "bill", needWant: "Need" },
      { label: "HOA", value: "hoa", type: "bill", needWant: "Need" },
      { label: "Internet", value: "internet", type: "bill", needWant: "Need" },
      { label: "Maintenance", value: "maintenance", type: "other", needWant: "Need" },
      { label: "Miscellaneous Home", value: "miscellaneous-home", type: "other", needWant: "Need" },
      { label: "Mortgage/Tax", value: "mortgage/tax", type: "bill", needWant: "Need" },
      { label: "Trash Pickup", value: "trash-pickup", type: "bill", needWant: "Need" },
      { label: "Water/Sewer", value: "water/sewer", type: "bill", needWant: "Need" }
    ]
  },

  living: {
    items: [
      { label: "Dining Out", value: "dining-out", type: "other", needWant: "Want" },
      { label: "Entertainment/Gifts", value: "entertainment/gifts", type: "other", needWant: "Want" },
      { label: "Groceries", value: "groceries", type: "other", needWant: "Need" },
      { label: "Gym/Fitness", value: "gym/fitness", type: "other", needWant: "Need" },
      { label: "Medical/Prescriptions/Vitamins", value: "medical/prescriptions/vitamins", type: "other", needWant: "Need" },
      { label: "Miscellaneous Living", value: "miscellaneous-living", type: "other", needWant: "Need" }
    ]
  },

  pets: {
    items: [
      { label: "Bird Food", value: "bird-food", type: "other", needWant: "Need" },
      { label: "Bird Other", value: "bird-other", type: "other", needWant: "Want" },
      { label: "Bird Supplies", value: "bird-supplies", type: "other", needWant: "Want" },
      { label: "Bird Toys", value: "bird-toys", type: "other", needWant: "Want" },
      { label: "Bird Vet/Medical", value: "bird-vet/medical", type: "other", needWant: "Need" },
      { label: "Dog Food", value: "dog-food", type: "other", needWant: "Need" },
      { label: "Dog Other", value: "dog-other", type: "other", needWant: "Want" },
      { label: "Dog Supplies", value: "dog-supplies", type: "other", needWant: "Want" },
      { label: "Dog Toys", value: "dog-toys", type: "other", needWant: "Want" },
      { label: "Dog Vet/Medical", value: "dog-vet/medical", type: "other", needWant: "Need" }
    ]
  },

  transportation: {
    items: [
      { label: "Car Gasoline", value: "car-gasoline", type: "other", needWant: "Need" },
      { label: "Car Maintenance/Repair", value: "car-maintenance/repair", type: "other", needWant: "Need" },
      { label: "Insurance/Registration", value: "insurance/registration", type: "bill", needWant: "Need" },
      { label: "Miscellaneous Transportation", value: "miscellaneous-transportation", type: "other", needWant: "Need" },
      { label: "Uber/RideShare", value: "uber/rideshare", type: "other", needWant: "Want" }
    ]
  },

  investments: {
    items: [
      { label: "IRA", value: "ira", type: "investment", needWant: "Savings" },
      { label: "Savings", value: "savings", type: "investment", needWant: "Savings" }
    ]
  },

  travel: {
    items: [
      { label: "Activities/Entertainment", value: "activities/entertainment", type: "other", needWant: "Want" },
      { label: "Car Rental", value: "car-rental", type: "other", needWant: "Want" },
      { label: "Flight", value: "flight", type: "other", needWant: "Want" },
      { label: "Hotel/Accommodations", value: "hotel/accommodations", type: "other", needWant: "Want" },
      { label: "Miscellaneous Travel", value: "miscellaneous-travel", type: "other", needWant: "Want" }
    ]
  },

  "tithings/donations": {
    items: [
      { label: "Donation", value: "donation", type: "other", needWant: "Need" },
      { label: "Tithes", value: "tithes", type: "other", needWant: "Need" }
    ]
  }
};

const SUBSCRIPTION_KEYWORDS = [
  "subscription",
  "membership",
  "member",
  "amazon prime",
  "prime",
  "netflix",
  "apple storage",
  "pandora"
];


/******************************************************************************
 * EXPLORER CHART DRILL-DOWN
 ******************************************************************************/

function setExploreDrilldown(
  breakdown,
  key,
  label
) {

  exploreDrilldown = {
    breakdown: breakdown,
    key: key,
    label: label
  };


  renderExploreDrilldown();

  renderExploreTable(
    getDrilledExplorerTransactions()
  );
}


function clearExploreDrilldown() {

  exploreDrilldown = null;

  renderExploreDrilldown();

  renderExploreTable(
    getExplorerAnalysisTransactions()
  );
}


function renderExploreDrilldown() {

  if (!exploreDrilldown) {

    elements.exploreDrilldown.hidden =
      true;

    elements.exploreDrilldownText.textContent =
      "";

    return;
  }


  elements.exploreDrilldown.hidden =
    false;

  elements.exploreDrilldownText.textContent =
    exploreDrilldown.label;
}


/******************************************************************************
 * Drill-Down Filtering Function
 ******************************************************************************/

function getDrilledExplorerTransactions() {

  const transactions =
    getExplorerAnalysisTransactions();


  if (!exploreDrilldown) {
    return transactions;
  }


  return transactions.filter(
    transaction => {

      const key =
        getExplorerGroupKey(
          transaction,
          exploreDrilldown.breakdown
        );


      return (
        key ===
        exploreDrilldown.key
      );
    }
  );
}


/******************************************************************************
 * INITIALIZATION
 ******************************************************************************/

function initializeApp() {
  registerEventListeners();

  if (elements.form) {
    setTodayAsDefault();
    populateItems();
  }

  if (document.body.dataset.dashboardOnly === "true") {
    showDashboardView();
  }
}

function on(element, eventName, handler) {
  if (element) {
    element.addEventListener(eventName, handler);
  }
}

function registerEventListeners() {
  on(elements.refreshDashboardButton, "click", refreshDashboard);
  on(elements.clearExploreDrilldown, "click", clearExploreDrilldown);
  on(elements.exploreMonth, "change", updateExplorer);
  on(elements.exploreWeek, "change", updateExplorer);
  on(elements.showOverviewButton, "click", showOverviewPanel);
  on(elements.showExploreButton, "click", showExplorePanel);
  on(elements.resetExploreButton, "click", resetExploreFilters);
  on(elements.exploreYear, "change", handleExploreYearChange);
  on(elements.explorePeriod, "change", handleExplorePeriodChange);
  on(elements.explorePerson, "change", updateExplorer);
  on(elements.exploreCategory, "change", handleExploreCategoryChange);
  on(elements.explorePet, "change", updateExplorer);
  on(elements.exploreItem, "change", updateExplorer);
  on(elements.exploreType, "change", updateExplorer);
  on(elements.exploreNeedWant, "change", updateExplorer);
  on(elements.exploreSearch, "input", updateExplorer);
  on(elements.exploreMeasure, "change", updateExplorer);
  on(elements.exploreBreakdown, "change", updateExplorer);
  on(elements.exploreMetric, "change", updateExplorer);
  on(elements.exploreAverageByBreakdown, "change", updateExplorer);
  on(elements.exploreStartDate, "change", updateExplorer);
  on(elements.exploreEndDate, "change", updateExplorer);

  on(elements.dashboardYear, "change", updateDashboardOverview);
  on(elements.dashboardPeriod, "change", updateDashboardOverview);
  on(elements.dashboardPerson, "change", updateDashboardOverview);

  on(elements.showFormButton, "click", showFormView);
  on(elements.showDashboardButton, "click", showDashboardView);

  on(elements.category, "change", handleCategoryChange);
  on(elements.item, "change", applyItemDefaults);
  on(elements.notes, "input", applySubscriptionOverride);
  on(elements.amount, "blur", formatAmountInput);
  on(elements.form, "submit", showPreview);
  on(elements.editButton, "click", returnToForm);
  on(elements.confirmButton, "click", submitTransaction);

  document.querySelectorAll(".table-sort-btn").forEach(button => {
    button.addEventListener("click", event => {
      handleExploreTableSort(button.dataset.sort, event.shiftKey);
    });
  });
}

/******************************************************************************
 * APP VIEW NAVIGATION [8/16/2026]
 ******************************************************************************/

function showFormView() {
  if (!elements.formView) return;

  elements.formView.hidden = false;
  if (elements.dashboardView) elements.dashboardView.hidden = true;

  elements.formView.classList.add("active-view");
  elements.dashboardView?.classList.remove("active-view");

  elements.showFormButton?.classList.add("active");
  elements.showDashboardButton?.classList.remove("active");

  elements.showFormButton?.setAttribute("aria-selected", "true");
  elements.showDashboardButton?.setAttribute("aria-selected", "false");
}


async function showDashboardView() {
  if (elements.formView) {
    elements.formView.hidden = true;
    elements.formView.classList.remove("active-view");
  }

  if (!elements.dashboardView) return;

  elements.dashboardView.hidden = false;
  elements.dashboardView.classList.add("active-view");

  elements.showFormButton?.classList.remove("active");
  elements.showDashboardButton?.classList.add("active");
  elements.showFormButton?.setAttribute("aria-selected", "false");
  elements.showDashboardButton?.setAttribute("aria-selected", "true");

  if (!dashboardLoaded || dashboardDataStale) {
    await loadDashboardData();
  }
}


/******************************************************************************
 * DASHBOARD DATA
 ******************************************************************************/

async function loadDashboardData() {

  if (dashboardLoading) return;

  dashboardLoading = true;

  showDashboardLoading();

  try {

    const dashboardUrl =
      `${SCRIPT_URL}?action=dashboard`;

    const response = await fetch(
      dashboardUrl,
      {
        method: "GET",
        cache: "no-store"
      }
    );

    if (!response.ok) {
      throw new Error(
        `Dashboard request failed with status ${response.status}.`
      );
    }

    const result =
      await readJsonResponse(response);

    if (result.status !== "success") {
      throw new Error(
        result.message ||
        "Dashboard data could not be loaded."
      );
    }

    if (!Array.isArray(result.transactions)) {
      throw new Error(
        "Dashboard API returned an invalid transaction list."
      );
    }

    dashboardTransactions =
      result.transactions.map(normalizeDashboardTransaction);

    dashboardMetadata =
      result.metadata || {};

    dashboardLoaded = true;
    dashboardDataStale = false;

    initializeDashboardFilters();
    initializeExplorer();


    elements.dashboardStatus.textContent =
      "Live data loaded.";

    elements.dashboardStatus.classList.remove(
      "error"
    );

    elements.dashboardStatus.classList.add(
      "success"
    );

    elements.dashboardFilters.hidden = false;
    elements.dashboardContent.hidden = false;

    elements.dashboardModeNav.hidden = false;

    updateDashboardOverview();

  } catch (error) {

    console.error(
      "Dashboard loading failed:",
      error
    );

    showDashboardError(
      error.message
    );

  } finally {

    dashboardLoading = false;

    elements.refreshDashboardButton.disabled =
      false;

    elements.refreshDashboardButton.textContent =
      "↻ Refresh";
  }
}


async function refreshDashboard() {

  dashboardDataStale = true;

  await loadDashboardData();
}


function showDashboardLoading() {

  elements.dashboardStatus.textContent =
    "Loading live financial data...";

  elements.dashboardStatus.classList.remove(
    "success",
    "error"
  );

  elements.dashboardFilters.hidden = true;
  elements.dashboardContent.hidden = true;

  elements.refreshDashboardButton.disabled =
    true;

  elements.refreshDashboardButton.textContent =
    "Refreshing...";
}


function showDashboardError(message) {

  elements.dashboardStatus.textContent =
    `Unable to load dashboard. ${message}`;

  elements.dashboardStatus.classList.remove(
    "success"
  );

  elements.dashboardStatus.classList.add(
    "error"
  );

  elements.dashboardFilters.hidden = true;
  elements.dashboardContent.hidden = true;
}


function normalizeDashboardTransaction(transaction) {
  const normalized = { ...transaction };

  if (normalized.type === "income") {
    normalized.needWant = "Income";
  } else if (normalized.type === "investment") {
    normalized.needWant = "Savings";
  } else if (!normalized.needWant) {
    normalized.needWant = "Unclassified";
  }

  return normalized;
}


/******************************************************************************
 * DASHBOARD FILTER SETUP
 ******************************************************************************/

function initializeDashboardFilters() {

  const currentSelection =
    elements.dashboardYear.value;

  let years = [];

  if (
    dashboardMetadata &&
    Array.isArray(
      dashboardMetadata.availableYears
    )
  ) {

    years =
      dashboardMetadata.availableYears;

  } else {

    years =
      [
        ...new Set(
          dashboardTransactions.map(
            transaction =>
              Number(transaction.year)
          )
        )
      ];

  }

  years =
    years
      .filter(Number.isFinite)
      .sort((a, b) => b - a);

  elements.dashboardYear.replaceChildren();

  years.forEach(year => {

    const option =
      new Option(
        String(year),
        String(year)
      );

    elements.dashboardYear.add(option);
  });


  /*
   * Preserve selected year on refresh if possible.
   */
  if (
    currentSelection &&
    years.includes(
      Number(currentSelection)
    )
  ) {

    elements.dashboardYear.value =
      currentSelection;

  } else {

    const currentYear =
      new Date().getFullYear();

    if (years.includes(currentYear)) {

      elements.dashboardYear.value =
        String(currentYear);

    } else if (years.length) {

      elements.dashboardYear.value =
        String(years[0]);
    }
  }
}


/******************************************************************************
 * DASHBOARD FILTERING
 ******************************************************************************/

function getFilteredDashboardTransactions() {

  const selectedYear =
    Number(elements.dashboardYear.value);

  const selectedPeriod =
    elements.dashboardPeriod.value;

  const selectedPerson =
    elements.dashboardPerson.value;

  const today =
    new Date();

  return dashboardTransactions.filter(
    transaction => {

      const transactionDate =
        parseApiDate(transaction.date);

      if (!transactionDate) {
        return false;
      }

      /*
       * YEAR
       */
      if (
        transaction.year !== selectedYear
      ) {
        return false;
      }


      /*
       * PERSON
       */
      if (
        selectedPerson !== "All" &&
        transaction.person !== selectedPerson
      ) {
        return false;
      }


      /*
       * PERIOD
       */

      if (selectedPeriod === "ytd") {

        /*
         * For the current year:
         * don't include future transactions.
         *
         * For a prior year:
         * YTD effectively becomes the whole year.
         */
        if (
          selectedYear === today.getFullYear() &&
          transactionDate > endOfToday(today)
        ) {
          return false;
        }

      }


      if (selectedPeriod === "month") {

        if (
          selectedYear !== today.getFullYear() ||
          transactionDate.getMonth() !== today.getMonth()
        ) {
          return false;
        }
      }


      if (selectedPeriod === "week") {

        const start =
          getStartOfWeek(today);

        const end =
          getEndOfWeek(today);

        if (
          transactionDate < start ||
          transactionDate > end
        ) {
          return false;
        }
      }


      /*
       * fullYear requires no additional filtering.
       */

      return true;
    }
  );
}


/******************************************************************************
 * DASHBOARD DATE HELPERS
 ******************************************************************************/

function parseApiDate(dateString) {

  const match =
    /^(\d{4})-(\d{2})-(\d{2})$/
      .exec(String(dateString || ""));

  if (!match) {
    return null;
  }

  const date =
    new Date(
      Number(match[1]),
      Number(match[2]) - 1,
      Number(match[3])
    );

  if (isNaN(date.getTime())) {
    return null;
  }

  return date;
}


function endOfToday(date) {

  const result =
    new Date(date);

  result.setHours(
    23,
    59,
    59,
    999
  );

  return result;
}


function getStartOfWeek(date) {

  const result =
    new Date(date);

  const day =
    result.getDay();

  /*
   * Monday = first day of week.
   */
  const difference =
    day === 0
      ? -6
      : 1 - day;

  result.setDate(
    result.getDate() +
    difference
  );

  result.setHours(
    0,
    0,
    0,
    0
  );

  return result;
}


function getEndOfWeek(date) {

  const result =
    getStartOfWeek(date);

  result.setDate(
    result.getDate() + 6
  );

  result.setHours(
    23,
    59,
    59,
    999
  );

  return result;
}


/******************************************************************************
 * DASHBOARD OVERVIEW
 ******************************************************************************/

function updateDashboardOverview() {

  if (!dashboardLoaded) {
    return;
  }

  const filtered =
    getFilteredDashboardTransactions();

  const totals =
    calculateDashboardTotals(filtered);

  renderDashboardKpis(totals);

  renderOverviewCharts(
    filtered,
    totals
  );

  renderSelectionSummary(
    filtered
  );

  renderRecentTransactions(
    filtered
  );
}



function calculateDashboardTotals(
  transactions
) {

  let income = 0;
  let expenses = 0;
  let investments = 0;

  let needs = 0;
  let wants = 0;
  let unclassified = 0;


  transactions.forEach(
    transaction => {

      income +=
        Number(transaction.income) || 0;

      expenses +=
        Number(transaction.expense) || 0;

      investments +=
        Number(transaction.investment) || 0;


      /*
       * Needs/Wants should describe spending,
       * not income or investments.
       */
      const expense =
        Number(transaction.expense) || 0;

      if (expense > 0) {

        if (
          transaction.needWant === "Need"
        ) {

          needs += expense;

        } else if (
          transaction.needWant === "Want"
        ) {

          wants += expense;

        } else {

          unclassified += expense;
        }
      }
    }
  );


  const remaining =
    income -
    expenses -
    investments;


  const savingsRate =
    income > 0
      ? investments / income
      : 0;


  const classifiedSpending =
    needs + wants;


  const needsPct =
    classifiedSpending > 0
      ? needs / classifiedSpending
      : 0;


  const wantsPct =
    classifiedSpending > 0
      ? wants / classifiedSpending
      : 0;


  return {
    income,
    expenses,
    investments,
    remaining,
    savingsRate,
    needs,
    wants,
    unclassified,
    needsPct,
    wantsPct
  };
}


/******************************************************************************
 * DASHBOARD MODE NAVIGATION
 ******************************************************************************/

function showOverviewPanel() {

  elements.overviewPanel.hidden = false;
  elements.explorePanel.hidden = true;

  elements.showOverviewButton.classList.add("active");
  elements.showExploreButton.classList.remove("active");

  elements.showOverviewButton.setAttribute(
    "aria-selected",
    "true"
  );

  elements.showExploreButton.setAttribute(
    "aria-selected",
    "false"
  );
}


function showExplorePanel() {

  elements.overviewPanel.hidden = true;
  elements.explorePanel.hidden = false;

  elements.showOverviewButton.classList.remove("active");
  elements.showExploreButton.classList.add("active");

  elements.showOverviewButton.setAttribute(
    "aria-selected",
    "false"
  );

  elements.showExploreButton.setAttribute(
    "aria-selected",
    "true"
  );

  updateExplorer();
}


/******************************************************************************
 * EXPLORER INITIALIZATION
 ******************************************************************************/

function initializeExplorer() {

  populateExploreYears();
  populateExploreCategories();
  populateExploreItems();

  elements.explorePeriod.value = "ytd";

elements.exploreMonth.value =
  String(
    new Date().getMonth() + 1
  );

elements.exploreMonthGroup.hidden =
  true;

  elements.exploreWeekGroup.hidden =
    true;

  populateExploreWeeks();

  elements.explorePerson.value = "All";
  elements.exploreCategory.value = "All";
  elements.exploreItem.value = "All";
  elements.exploreType.value = "All";
  elements.exploreNeedWant.value = "All";
  elements.explorePet.value = "All";
  elements.explorePetGroup.hidden = true;
  elements.exploreMeasure.value = "spending";
  elements.exploreAverageByBreakdown.checked = false;

  elements.exploreBreakdown.value = "month";
  elements.exploreMetric.value = "dollars";

  elements.exploreSearch.value = "";

  elements.customDateControls.hidden = true;

  updateExplorer();
}


function populateExploreYears() {

  const current =
    elements.exploreYear.value;

  const years =
    [
      ...new Set(
        dashboardTransactions.map(
          transaction =>
            Number(transaction.year)
        )
      )
    ]
      .filter(Number.isFinite)
      .sort((a, b) => b - a);


  elements.exploreYear.replaceChildren();


  years.forEach(year => {

    elements.exploreYear.add(
      new Option(
        String(year),
        String(year)
      )
    );

  });


  if (
    current &&
    years.includes(Number(current))
  ) {

    elements.exploreYear.value =
      current;

  } else {

    const thisYear =
      new Date().getFullYear();

    elements.exploreYear.value =
      years.includes(thisYear)
        ? String(thisYear)
        : String(years[0] || "");
  }
}


function populateExploreWeeks() {

  const selectedYear =
    Number(elements.exploreYear.value);

  const currentValue =
    elements.exploreWeek.value;

  const weeks = [
    ...new Set(
      dashboardTransactions
        .filter(transaction =>
          Number(transaction.year) === selectedYear
        )
        .map(transaction => Number(transaction.week))
        .filter(week =>
          Number.isFinite(week) && week > 0
        )
    )
  ].sort((a, b) => a - b);

  elements.exploreWeek.replaceChildren();

  weeks.forEach(week => {
    elements.exploreWeek.add(
      new Option(`Week ${week}`, String(week))
    );
  });

  if (weeks.includes(Number(currentValue))) {
    elements.exploreWeek.value = currentValue;
    return;
  }

  const today = new Date();
  const currentWeek = getClientIsoWeekNumber(today);

  if (
    selectedYear === today.getFullYear() &&
    weeks.includes(currentWeek)
  ) {
    elements.exploreWeek.value = String(currentWeek);
  } else if (weeks.length) {
    elements.exploreWeek.value =
      String(weeks[weeks.length - 1]);
  }
}


function getClientIsoWeekNumber(date) {

  const d = new Date(
    Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    )
  );

  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);

  const yearStart = new Date(
    Date.UTC(d.getUTCFullYear(), 0, 1)
  );

  return Math.ceil(
    (((d - yearStart) / 86400000) + 1) / 7
  );
}


function populateExploreCategories() {

  const categories =
    [
      ...new Set(
        dashboardTransactions
          .map(
            transaction =>
              transaction.category
          )
          .filter(Boolean)
      )
    ].sort();


  elements.exploreCategory.replaceChildren();

  elements.exploreCategory.add(
    new Option(
      "All Categories",
      "All"
    )
  );


  categories.forEach(category => {

    elements.exploreCategory.add(
      new Option(
        formatItemLabel(category),
        category
      )
    );

  });
}


function populateExploreItems() {

  const selectedCategory =
    elements.exploreCategory.value;

  const currentItem =
    elements.exploreItem.value;


  let source =
    dashboardTransactions;


  if (
    selectedCategory &&
    selectedCategory !== "All"
  ) {

    source =
      source.filter(
        transaction =>
          transaction.category ===
          selectedCategory
      );
  }


  const items =
    [
      ...new Set(
        source
          .map(
            transaction =>
              transaction.item
          )
          .filter(Boolean)
      )
    ].sort();


  elements.exploreItem.replaceChildren();

  elements.exploreItem.add(
    new Option(
      "All Items",
      "All"
    )
  );


  items.forEach(item => {

    elements.exploreItem.add(
      new Option(
        formatItemLabel(item),
        item
      )
    );

  });


  if (
    items.includes(currentItem)
  ) {

    elements.exploreItem.value =
      currentItem;

  } else {

    elements.exploreItem.value =
      "All";
  }
}


function handleExploreCategoryChange() {
  const isPets = elements.exploreCategory.value === "pets";
  elements.explorePetGroup.hidden = !isPets;

  if (!isPets) {
    elements.explorePet.value = "All";
  }

  populateExploreItems();
  updateExplorer();
}


function handleExploreYearChange() {

  if (
    elements.explorePeriod.value ===
    "week"
  ) {
    populateExploreWeeks();
  }

  updateExplorer();
}


function handleExplorePeriodChange() {

  const period = elements.explorePeriod.value;
  const isCustom = period === "custom";
  const isMonth = period === "month";
  const isWeek = period === "week";

  elements.customDateControls.hidden = !isCustom;
  elements.exploreMonthGroup.hidden = !isMonth;
  elements.exploreWeekGroup.hidden = !isWeek;

  if (isMonth) {
    const selectedYear = Number(elements.exploreYear.value);
    const today = new Date();

    if (selectedYear === today.getFullYear()) {
      elements.exploreMonth.value = String(today.getMonth() + 1);
    } else if (!elements.exploreMonth.value) {
      elements.exploreMonth.value = "1";
    }
  }

  if (isWeek) {
    populateExploreWeeks();
  }

  updateExplorer();
}


/******************************************************************************
 * EXPLORER FILTERING
 ******************************************************************************/

function getExplorerTransactions() {

  const selectedYear =
    Number(
      elements.exploreYear.value
    );

  const period =
    elements.explorePeriod.value;

  const person =
    elements.explorePerson.value;

  const category =
    elements.exploreCategory.value;

  const pet =
    elements.explorePet.value;

  const item =
    elements.exploreItem.value;

  const type =
    elements.exploreType.value;

  const needWant =
    elements.exploreNeedWant.value;

  const search =
    elements.exploreSearch.value
      .trim()
      .toLowerCase();


  const today =
    new Date();


  const customStart =
    elements.exploreStartDate.value
      ? parseApiDate(
          elements.exploreStartDate.value
        )
      : null;


  const customEnd =
    elements.exploreEndDate.value
      ? endOfToday(
          parseApiDate(
            elements.exploreEndDate.value
          )
        )
      : null;


  return dashboardTransactions.filter(
    transaction => {

      const date =
        parseApiDate(
          transaction.date
        );


      if (!date) {
        return false;
      }


      if (
        transaction.year !==
        selectedYear
      ) {
        return false;
      }


      if (
        person !== "All" &&
        transaction.person !== person
      ) {
        return false;
      }


      if (
        category !== "All" &&
        transaction.category !== category
      ) {
        return false;
      }

      if (
        pet !== "All" &&
        getPetType(transaction) !== pet
      ) {
        return false;
      }


      if (
        item !== "All" &&
        transaction.item !== item
      ) {
        return false;
      }


      if (
        type !== "All" &&
        transaction.type !== type
      ) {
        return false;
      }


      if (
        needWant !== "All" &&
        transaction.needWant !==
          needWant
      ) {
        return false;
      }


      if (search) {

        const searchableText =
          [
            transaction.category,
            transaction.item,
            transaction.notes,
            transaction.person,
            transaction.type,
            transaction.needWant
          ]
            .join(" ")
            .toLowerCase();


        if (
          !searchableText.includes(
            search
          )
        ) {
          return false;
        }
      }


      if (period === "ytd") {

        if (
          selectedYear ===
            today.getFullYear() &&
          date > endOfToday(today)
        ) {
          return false;
        }

      }


if (period === "month") {

  const selectedMonth =
    Number(
      elements.exploreMonth.value
    );


  if (
    date.getMonth() + 1 !==
    selectedMonth
  ) {
    return false;
  }

}

      if (period === "week") {

        const selectedWeek =
          Number(elements.exploreWeek.value);

        if (
          Number(transaction.week) !==
          selectedWeek
        ) {
          return false;
        }
      }


      if (period === "custom") {

        if (
          customStart &&
          date < customStart
        ) {
          return false;
        }


        if (
          customEnd &&
          date > customEnd
        ) {
          return false;
        }

      }


      return true;
    }
  );
}


function getPetType(transaction) {
  if (transaction.category !== "pets") return "";

  const item = String(transaction.item || "").toLowerCase();
  if (item.startsWith("dog-")) return "Dog";
  if (item.startsWith("bird-")) return "Bird";
  return "Other";
}


function getSelectedMeasure() {
  return elements.exploreMeasure?.value || "spending";
}


function getMeasureLabel(measure = getSelectedMeasure()) {
  const labels = {
    spending: "Spending",
    income: "Income",
    investments: "Savings / Investments",
    netCashflow: "Net Cash Flow"
  };

  return labels[measure] || "Spending";
}


function getTransactionMeasureAmount(
  transaction,
  measure = getSelectedMeasure()
) {

  const income =
    Number(transaction.income) || 0;

  const spending =
    Number(transaction.expense) || 0;

  const investments =
    Number(transaction.investment) || 0;


  switch (measure) {

    case "income":
      return income;

    case "investments":
      return investments;

    case "netCashflow":
      return income - spending - investments;

    case "spending":
    default:
      return spending;
  }
}


function getExplorerAnalysisTransactions() {

  const measure =
    getSelectedMeasure();

  return getExplorerTransactions().filter(
    transaction => {

      return (
        getTransactionMeasureAmount(
          transaction,
          measure
        ) !== 0
      );
    }
  );
}


/******************************************************************************
 * EXPLORER UPDATE
 ******************************************************************************/

function updateExplorer() {

  if (!dashboardLoaded) return;

  exploreDrilldown = null;

  renderExploreDrilldown();

  renderExploreFilterChips();


  const transactions =
    getExplorerAnalysisTransactions();

  const grouped =
    groupExplorerTransactions(
      transactions
    );


  renderExploreSummary(
    transactions,
    grouped
  );

  renderExploreComparison(
    transactions
  );

  renderExploreChart(
    grouped,
    transactions
  );

  renderExploreTable(
    transactions
  );
}


function renderExploreSummary(
  transactions,
  groups
) {

  const measure =
    getSelectedMeasure();

  const measureLabel =
    getMeasureLabel(
      measure
    );


  const total =
    transactions.reduce(
      (sum, transaction) =>
        sum +
        getTransactionMeasureAmount(
          transaction,
          measure
        ),
      0
    );


  const count =
    transactions.length;


  const averageByBreakdown =
    Boolean(
      elements.exploreAverageByBreakdown
        ?.checked
    );


  const denominator =
    averageByBreakdown
      ? groups.length
      : count;


  const average =
    denominator > 0
      ? total / denominator
      : 0;


  elements.exploreTotalLabel.textContent =
    measureLabel;

  elements.exploreTotal.textContent =
    formatCurrency(total);

  elements.exploreCountLabel.textContent =
    `${measureLabel} transactions`;

  elements.exploreCount.textContent =
    String(count);


  if (averageByBreakdown) {

    const breakdownLabel =
      elements.exploreBreakdown
        .selectedOptions[0]
        ?.textContent
        .trim() ||
      "Breakdown";


    elements.exploreAverageLabel.textContent =
      `Average per ${breakdownLabel}`;

  } else {

    elements.exploreAverageLabel.textContent =
      "Average per Transaction";
  }


  elements.exploreAverage.textContent =
    formatCurrency(average);
}


/******************************************************************************
 * EXPLORER PERIOD COMPARISON
 ******************************************************************************/

function renderExploreComparison(
  currentTransactions
) {

  const comparison =
    getExplorerComparisonData(
      currentTransactions
    );


  if (!comparison.available) {

    elements.exploreComparisonTitle.textContent =
      comparison.title ||
      "Period comparison";

    elements.exploreComparisonCurrentLabel.textContent =
      comparison.currentLabel ||
      "Current";

    elements.exploreComparisonPreviousLabel.textContent =
      comparison.previousLabel ||
      "Previous";

    elements.exploreComparisonCurrent.textContent =
      "—";

    elements.exploreComparisonPrevious.textContent =
      "—";

    elements.exploreComparisonChange.textContent =
      "—";

    elements.exploreComparisonChange.className =
      "explore-comparison-change neutral";

    elements.exploreComparisonNote.textContent =
      comparison.note ||
      "Choose a complete period to compare it with the previous equivalent period.";

    return;
  }


  elements.exploreComparisonTitle.textContent =
    comparison.title;

  elements.exploreComparisonCurrentLabel.textContent =
    comparison.currentLabel;

  elements.exploreComparisonPreviousLabel.textContent =
    comparison.previousLabel;

  elements.exploreComparisonCurrent.textContent =
    formatCurrency(
      comparison.currentTotal
    );

  elements.exploreComparisonPrevious.textContent =
    formatCurrency(
      comparison.previousTotal
    );


  const delta =
    comparison.currentTotal -
    comparison.previousTotal;


  let percentChange =
    null;


  if (
    comparison.previousTotal !==
    0
  ) {

    percentChange =
      delta /
      comparison.previousTotal;
  }


  const directionClass =
    delta > 0
      ? "increase"
      : delta < 0
        ? "decrease"
        : "neutral";


  const sign =
    delta > 0
      ? "+"
      : "";


  const percentText =
    percentChange === null
      ? ""
      : ` (${sign}${(
          percentChange *
          100
        ).toFixed(1)}%)`;


  elements.exploreComparisonChange.textContent =
    `${sign}${formatCurrency(delta)}${percentText}`;


  elements.exploreComparisonChange.className =
    `explore-comparison-change ${directionClass}`;


  elements.exploreComparisonNote.textContent =
    `${comparison.note} Measure: ${getMeasureLabel()}.`;
}


function getExplorerComparisonData(
  currentTransactions
) {

  const bounds =
    getExplorerComparisonBounds();


  if (!bounds.available) {
    return bounds;
  }


  const previousTransactions =
    dashboardTransactions.filter(
      transaction => {

        if (
          !matchesExplorerNonPeriodFilters(
            transaction
          )
        ) {
          return false;
        }


        if (
          getTransactionMeasureAmount(
            transaction
          ) === 0
        ) {
          return false;
        }


        const date =
          parseApiDate(
            transaction.date
          );


        if (!date) {
          return false;
        }


        return (
          date >=
            bounds.previousStart &&
          date <=
            bounds.previousEnd
        );
      }
    );


  const currentTotal =
    currentTransactions.reduce(
      (sum, transaction) =>
        sum +
        getTransactionMeasureAmount(
          transaction
        ),
      0
    );


  const previousTotal =
    previousTransactions.reduce(
      (sum, transaction) =>
        sum +
        getTransactionMeasureAmount(
          transaction
        ),
      0
    );


  return {
    ...bounds,
    currentTotal,
    previousTotal,
    available: true
  };
}


function matchesExplorerNonPeriodFilters(
  transaction
) {

  const person =
    elements.explorePerson.value;

  const category =
    elements.exploreCategory.value;

  const item =
    elements.exploreItem.value;

  const type =
    elements.exploreType.value;

  const needWant =
    elements.exploreNeedWant.value;

  const pet =
    elements.explorePet.value;

  const search =
    elements.exploreSearch.value
      .trim()
      .toLowerCase();


  if (
    person !== "All" &&
    transaction.person !== person
  ) {
    return false;
  }


  if (
    category !== "All" &&
    transaction.category !== category
  ) {
    return false;
  }


  if (
    pet !== "All" &&
    getPetType(transaction) !== pet
  ) {
    return false;
  }


  if (
    item !== "All" &&
    transaction.item !== item
  ) {
    return false;
  }


  if (
    type !== "All" &&
    transaction.type !== type
  ) {
    return false;
  }


  if (
    needWant !== "All" &&
    transaction.needWant !== needWant
  ) {
    return false;
  }


  if (search) {

    const searchableText =
      [
        transaction.category,
        transaction.item,
        transaction.notes,
        transaction.person,
        transaction.type,
        transaction.needWant
      ]
        .join(" ")
        .toLowerCase();


    if (
      !searchableText.includes(
        search
      )
    ) {
      return false;
    }
  }


  return true;
}


function getExplorerComparisonBounds() {

  const period =
    elements.explorePeriod.value;

  const selectedYear =
    Number(
      elements.exploreYear.value
    );

  const today =
    new Date();


  if (
    period === "month"
  ) {

    const selectedMonth =
      Number(
        elements.exploreMonth.value
      );

    const currentStart =
      new Date(
        selectedYear,
        selectedMonth - 1,
        1
      );

    const currentEnd =
      endOfDay(
        new Date(
          selectedYear,
          selectedMonth,
          0
        )
      );

    const previousStart =
      new Date(
        selectedYear,
        selectedMonth - 2,
        1
      );

    const previousEnd =
      endOfDay(
        new Date(
          selectedYear,
          selectedMonth - 1,
          0
        )
      );


    return {
      available: true,
      title: "Month-over-month",
      currentLabel:
        formatMonthYear(
          currentStart
        ),
      previousLabel:
        formatMonthYear(
          previousStart
        ),
      currentStart,
      currentEnd,
      previousStart,
      previousEnd,
      note:
        "Compares total dollars for the selected month with the immediately previous calendar month, using the same filters."
    };
  }


  if (
    period === "week"
  ) {

    const selectedWeek =
      Number(
        elements.exploreWeek.value
      );


    if (!selectedWeek) {

      return {
        available: false,
        title: "Week-over-week",
        note:
          "Select a week to enable comparison."
      };
    }


    const currentStart =
      getIsoWeekStart(
        selectedYear,
        selectedWeek
      );

    const currentEnd =
      endOfDay(
        addDays(
          currentStart,
          6
        )
      );

    const previousStart =
      addDays(
        currentStart,
        -7
      );

    const previousEnd =
      endOfDay(
        addDays(
          currentStart,
          -1
        )
      );


    return {
      available: true,
      title: "Week-over-week",
      currentLabel:
        formatDateRange(
          currentStart,
          currentEnd
        ),
      previousLabel:
        formatDateRange(
          previousStart,
          previousEnd
        ),
      currentStart,
      currentEnd,
      previousStart,
      previousEnd,
      note:
        "Compares total dollars for the selected ISO week with the immediately previous seven-day week, using the same filters."
    };
  }


  if (
    period === "custom"
  ) {

    const currentStart =
      elements.exploreStartDate.value
        ? parseApiDate(
            elements.exploreStartDate.value
          )
        : null;

    const rawEnd =
      elements.exploreEndDate.value
        ? parseApiDate(
            elements.exploreEndDate.value
          )
        : null;


    if (
      !currentStart ||
      !rawEnd
    ) {

      return {
        available: false,
        title:
          "Custom-range comparison",
        currentLabel:
          "Selected range",
        previousLabel:
          "Previous range",
        note:
          "Enter both a start and end date to compare a custom range with the immediately preceding range of equal length."
      };
    }


    const currentEnd =
      endOfDay(
        rawEnd
      );


    if (
      currentEnd <
      currentStart
    ) {

      return {
        available: false,
        title:
          "Custom-range comparison",
        note:
          "The custom end date must be on or after the start date."
      };
    }


    const dayCount =
      Math.floor(
        (
          startOfDay(
            currentEnd
          ) -
          startOfDay(
            currentStart
          )
        ) /
        86400000
      ) + 1;


    const previousEnd =
      endOfDay(
        addDays(
          currentStart,
          -1
        )
      );


    const previousStart =
      addDays(
        startOfDay(
          previousEnd
        ),
        -(
          dayCount - 1
        )
      );


    return {
      available: true,
      title:
        "Custom-range comparison",
      currentLabel:
        formatDateRange(
          currentStart,
          currentEnd
        ),
      previousLabel:
        formatDateRange(
          previousStart,
          previousEnd
        ),
      currentStart,
      currentEnd,
      previousStart,
      previousEnd,
      note:
        "Compares total dollars with the immediately preceding date range of equal length, using the same filters."
    };
  }


  if (
    period === "fullYear"
  ) {

    const currentStart =
      new Date(
        selectedYear,
        0,
        1
      );

    const currentEnd =
      endOfDay(
        new Date(
          selectedYear,
          11,
          31
        )
      );

    const previousStart =
      new Date(
        selectedYear - 1,
        0,
        1
      );

    const previousEnd =
      endOfDay(
        new Date(
          selectedYear - 1,
          11,
          31
        )
      );


    return {
      available: true,
      title: "Year-over-year",
      currentLabel:
        String(
          selectedYear
        ),
      previousLabel:
        String(
          selectedYear - 1
        ),
      currentStart,
      currentEnd,
      previousStart,
      previousEnd,
      note:
        "Compares total dollars for the selected full year with the prior full year, using the same filters."
    };
  }


  /*
   * YTD
   */
  const currentStart =
    new Date(
      selectedYear,
      0,
      1
    );

  let currentEnd;
  let previousEnd;


  if (
    selectedYear ===
    today.getFullYear()
  ) {

    currentEnd =
      endOfToday(
        today
      );

    previousEnd =
      endOfDay(
        new Date(
          selectedYear - 1,
          today.getMonth(),
          Math.min(
            today.getDate(),
            daysInMonth(
              selectedYear - 1,
              today.getMonth()
            )
          )
        )
      );

  } else {

    currentEnd =
      endOfDay(
        new Date(
          selectedYear,
          11,
          31
        )
      );

    previousEnd =
      endOfDay(
        new Date(
          selectedYear - 1,
          11,
          31
        )
      );
  }


  const previousStart =
    new Date(
      selectedYear - 1,
      0,
      1
    );


  return {
    available: true,

    title:
      selectedYear ===
      today.getFullYear()
        ? "YTD vs. prior-year YTD"
        : "Year-over-year",

    currentLabel:
      selectedYear ===
      today.getFullYear()
        ? `${selectedYear} YTD`
        : String(
            selectedYear
          ),

    previousLabel:
      selectedYear ===
      today.getFullYear()
        ? `${selectedYear - 1} YTD`
        : String(
            selectedYear - 1
          ),

    currentStart,
    currentEnd,
    previousStart,
    previousEnd,

    note:
      selectedYear ===
      today.getFullYear()
        ? "Compares total dollars through today's date with the same year-to-date span one year earlier, using the same filters."
        : "For a prior year, YTD follows the app's existing full-year behavior and compares with the prior full year."
  };
}


function addDays(
  date,
  days
) {

  const result =
    new Date(
      date
    );

  result.setDate(
    result.getDate() +
    days
  );

  return result;
}


function startOfDay(
  date
) {

  const result =
    new Date(
      date
    );

  result.setHours(
    0,
    0,
    0,
    0
  );

  return result;
}


function endOfDay(
  date
) {

  const result =
    new Date(
      date
    );

  result.setHours(
    23,
    59,
    59,
    999
  );

  return result;
}


function getIsoWeekStart(
  year,
  week
) {

  const januaryFourth =
    new Date(
      year,
      0,
      4
    );

  const day =
    januaryFourth.getDay() ||
    7;

  const firstMonday =
    new Date(
      januaryFourth
    );

  firstMonday.setDate(
    januaryFourth.getDate() -
    day +
    1
  );

  return addDays(
    firstMonday,
    (
      week - 1
    ) * 7
  );
}


function daysInMonth(
  year,
  zeroBasedMonth
) {

  return new Date(
    year,
    zeroBasedMonth + 1,
    0
  ).getDate();
}


function formatMonthYear(
  date
) {

  return new Intl.DateTimeFormat(
    "en-US",
    {
      month: "long",
      year: "numeric"
    }
  ).format(
    date
  );
}


function formatDateRange(
  start,
  end
) {

  const formatter =
    new Intl.DateTimeFormat(
      "en-US",
      {
        month: "short",
        day: "numeric",
        year: "numeric"
      }
    );


  return (
    `${formatter.format(start)} – ` +
    `${formatter.format(end)}`
  );
}

/******************************************************************************
 * EXPLORER GROUPING
 ******************************************************************************/

function groupExplorerTransactions(
  transactions
) {

  const breakdown =
    elements.exploreBreakdown.value;


  const groups =
    new Map();


  transactions.forEach(
    transaction => {

      const key =
        getExplorerGroupKey(
          transaction,
          breakdown
        );


      if (!groups.has(key)) {

        groups.set(
          key,
          {
            label: key,
            total: 0,
            count: 0
          }
        );
      }


      const group =
        groups.get(key);


      group.total +=
        getTransactionMeasureAmount(
          transaction
        );


      group.count += 1;
    }
  );


  let result =
    Array.from(
      groups.values()
    );


  if (
    breakdown === "month" ||
    breakdown === "week"
  ) {

    result.sort(
      (a, b) =>
        a.label.localeCompare(
          b.label
        )
    );

  } else {

    result.sort(
      (a, b) =>
        b.total - a.total
    );
  }


  return result;
}


function getExplorerGroupKey(
  transaction,
  breakdown
) {

  switch (breakdown) {

    case "month":
      return transaction.monthKey;


    case "week":
      return (
        `${transaction.year}-W` +
        String(
          transaction.week
        ).padStart(2, "0")
      );


    case "category":
      return (
        transaction.category ||
        "Uncategorized"
      );


    case "item":
      return (
        transaction.item ||
        "Uncategorized"
      );


    case "person":
      return (
        transaction.person ||
        "Household"
      );


    case "type":
      return (
        transaction.type ||
        "Other"
      );


    case "needWant":
      return (
        transaction.needWant ||
        "Unclassified"
      );


    default:
      return "All";
  }
}


function getExplorerChartValues(
  groups
) {

  const metric =
    elements.exploreMetric.value;


  const overallTotal =
    getSelectedMeasure() === "netCashflow"
      ? groups.reduce((sum, group) => sum + Math.abs(group.total), 0)
      : groups.reduce((sum, group) => sum + group.total, 0);


  return groups.map(
    group => {

      switch (metric) {

        case "count":

          return group.count;


        case "average":

          return group.count
            ? group.total /
              group.count
            : 0;


        case "percent":

          return overallTotal
            ? (
                group.total /
                overallTotal
              ) * 100
            : 0;


        case "dollars":
        default:

          return group.total;
      }
    }
  );
}


/******************************************************************************
 *  Pretty Labels
 ******************************************************************************/

function formatExplorerGroupLabel(
  label
) {

  const breakdown =
    elements.exploreBreakdown.value;


  if (
    breakdown === "month" &&
    /^\d{4}-\d{2}$/.test(label)
  ) {

    const [
      year,
      month
    ] =
      label.split("-")
        .map(Number);


    return new Intl.DateTimeFormat(
      "en-US",
      {
        month: "short"
      }
    ).format(
      new Date(
        year,
        month - 1,
        1
      )
    );
  }


  if (breakdown === "week") {

    return label.replace(
      /^\d{4}-W/,
      "Week "
    );
  }


  return formatItemLabel(label);
}



/******************************************************************************
 * EXPLORER CHART
 ******************************************************************************/

function renderExploreChart(
  groups,
  transactions
) {

  if (exploreChart) {
    exploreChart.destroy();
    exploreChart = null;
  }


  if (!groups.length) {

    elements.exploreChartCanvas.hidden =
      true;

    elements.exploreChartEmpty.hidden =
      false;

    return;
  }


  elements.exploreChartCanvas.hidden =
    false;

  elements.exploreChartEmpty.hidden =
    true;


  const breakdown =
    elements.exploreBreakdown.value;


  const metric =
    elements.exploreMetric.value;


  const labels =
    groups.map(
      group =>
        formatExplorerGroupLabel(
          group.label
        )
    );


  const values =
    getExplorerChartValues(
      groups
    );


  const chronological =
    breakdown === "month" ||
    breakdown === "week";


  const chartType =
    chronological
      ? "line"
      : "bar";


  elements.exploreChartTitle.textContent =
    buildExplorerChartTitle();


  elements.exploreChartSubtitle.textContent =
    `${transactions.length} matching ${
      transactions.length === 1
        ? "transaction"
        : "transactions"
    }`;


  exploreChart =
    new Chart(
      elements.exploreChartCanvas,
      {

        type: chartType,


        data: {

          labels: labels,

          datasets: [

            {

              label:
                getExplorerMetricLabel(),

              data:
                values,

              backgroundColor:
                "#0E6F6B",

              borderColor:
                "#0E6F6B",

              borderWidth: 2,

              borderRadius: 6,

              tension: 0.3,

              fill:
                chronological
                  ? false
                  : undefined

            }

          ]

        },


        options: {

          responsive: true,

          maintainAspectRatio: false,

onClick: (
  event,
  activeElements
) => {

  if (!activeElements.length) {
    return;
  }


  const dataIndex =
    activeElements[0].index;


  const group =
    groups[dataIndex];


  if (!group) {
    return;
  }


  setExploreDrilldown(
    breakdown,
    group.label,
    formatExplorerGroupLabel(
      group.label
    )
  );
},


onHover: (
  event,
  activeElements
) => {

  const canvas =
    event.native?.target;


  if (!canvas) {
    return;
  }


  canvas.style.cursor =
    activeElements.length
      ? "pointer"
      : "default";
},

          plugins: {

            legend: {
              display: false
            },


            tooltip: {

              callbacks: {

                label: context =>
                  formatExplorerMetricValue(
                    context.raw,
                    metric
                  )

              }

            },


            datalabels: {
              display: false
            }

          },


          scales: {

            y: {

              beginAtZero: true,

              ticks: {

                callback: value =>
                  formatExplorerAxisValue(
                    value,
                    metric
                  )

              }

            }

          }

        }

      }
    );
}


function buildExplorerChartTitle() {

  const metric =
    elements.exploreMetric
      .selectedOptions[0]
      ?.textContent
      .trim() || "";


  const breakdown =
    elements.exploreBreakdown
      .selectedOptions[0]
      ?.textContent
      .trim() || "";


  return (
    `${metric} · ${getMeasureLabel()} by ${breakdown}`
  );
}


function getExplorerMetricLabel() {

  return (
    elements.exploreMetric
      .selectedOptions[0]
      ?.textContent
      .trim() ||
    "Value"
  );
}


function formatExplorerMetricValue(
  value,
  metric
) {

  if (metric === "count") {

    return (
      `${value} ${
        value === 1
          ? "transaction"
          : "transactions"
      }`
    );
  }


  if (metric === "percent") {

    return (
      Number(value).toFixed(1) +
      "%"
    );
  }


  return formatCurrency(value);
}


function formatExplorerAxisValue(
  value,
  metric
) {

  if (metric === "percent") {

    return (
      Math.round(value) +
      "%"
    );
  }


  if (metric === "count") {

    return Math.round(value);
  }


  return new Intl.NumberFormat(
    "en-US",
    {
      style: "currency",
      currency: "USD",
      notation: "compact",
      maximumFractionDigits: 1
    }
  ).format(value);
}


/******************************************************************************
 * EXPLORER TRANSACTION TABLE
 ******************************************************************************/

function renderExploreTable(
  transactions
) {

  elements.exploreTableBody.replaceChildren();

  const sorted =
    sortExplorerTransactions(transactions);

  elements.exploreTableDescription.textContent =
    `${transactions.length} matching ${
      transactions.length === 1
        ? "transaction"
        : "transactions"
    }`;

  if (!sorted.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");

    cell.colSpan = 8;
    cell.className = "explore-table-empty";
    cell.textContent = "No matching transactions.";

    row.appendChild(cell);
    elements.exploreTableBody.appendChild(row);

    updateExploreSortIndicators();
    return;
  }

  const cellDefinitions = [
    {
      label: "Date",
      value: transaction =>
        formatShortDate(transaction.date)
    },
    {
      label: "Person",
      value: transaction =>
        transaction.person
    },
    {
      label: "Category",
      value: transaction =>
        formatItemLabel(transaction.category)
    },
    {
      label: "Item",
      value: transaction =>
        formatItemLabel(transaction.item)
    },
    {
      label: "Type",
      value: transaction =>
        formatItemLabel(transaction.type)
    },
    {
      label: "N/W",
      value: transaction =>
        transaction.needWant
    },
    {
      label: "Notes",
      value: transaction =>
        transaction.notes || "-"
    },
    {
      label: "Amount",
      value: transaction =>
        formatCurrency(transaction.amount)
    }
  ];

  sorted.forEach(transaction => {
    const row = document.createElement("tr");

    row.className = "transaction-row";
    row.tabIndex = 0;
    row.setAttribute("role", "button");
    row.setAttribute(
      "aria-label",
      `View details for ${formatItemLabel(transaction.item)}, ${formatCurrency(transaction.amount)}`
    );

    row.addEventListener(
      "click",
      () => openTransactionDetail(transaction)
    );

    row.addEventListener(
      "keydown",
      event => {
        if (
          event.key === "Enter" ||
          event.key === " "
        ) {
          event.preventDefault();
          openTransactionDetail(transaction);
        }
      }
    );

    cellDefinitions.forEach(
      (definition, index) => {

        const cell =
          document.createElement("td");

        const value =
          definition.value(transaction);

        cell.textContent =
          value || "-";

        cell.dataset.label =
          definition.label;

        if (index === 6) {
          cell.classList.add("notes-cell");
          cell.title =
            transaction.notes || "";
        }

        if (index === 7) {
          cell.classList.add(
            "amount-cell"
          );
        }

        row.appendChild(cell);
      }
    );

    elements.exploreTableBody
      .appendChild(row);
  });

  updateExploreSortIndicators();
}


/******************************************************************************
 * TRANSACTION DETAIL
 ******************************************************************************/

function openTransactionDetail(
  transaction
) {

  elements.transactionDetailTitle.textContent =
    formatItemLabel(
      transaction.item
    ) || "Transaction";

  elements.detailDate.textContent =
    formatDateForDisplay(
      transaction.date
    ) || "—";

  elements.detailAmount.textContent =
    formatCurrency(
      Number(transaction.amount) || 0
    );

  elements.detailPerson.textContent =
    transaction.person || "—";

  elements.detailCategory.textContent =
    formatItemLabel(
      transaction.category
    ) || "—";

  elements.detailItem.textContent =
    formatItemLabel(
      transaction.item
    ) || "—";

  elements.detailType.textContent =
    formatItemLabel(
      transaction.type
    ) || "—";

  elements.detailNeedWant.textContent =
    transaction.needWant || "—";

  elements.detailNotes.textContent =
    transaction.notes || "No notes.";

  if (
    typeof elements.transactionDetailDialog.showModal ===
    "function"
  ) {
    elements.transactionDetailDialog.showModal();
  } else {
    elements.transactionDetailDialog.setAttribute(
      "open",
      ""
    );
  }
}


function closeTransactionDetail() {

  if (
    typeof elements.transactionDetailDialog.close ===
      "function" &&
    elements.transactionDetailDialog.open
  ) {
    elements.transactionDetailDialog.close();
  } else {
    elements.transactionDetailDialog.removeAttribute(
      "open"
    );
  }
}


/******************************************************************************
 * MOBILE MULTI-COLUMN SORTING
 ******************************************************************************/

function applyMobileSort() {

  const field =
    elements.mobileSortField.value;

  const direction =
    elements.mobileSortDirection.value;

  if (!field) {
    return;
  }

  const existingIndex =
    exploreSorts.findIndex(
      sort =>
        sort.field === field
    );

  if (existingIndex >= 0) {

    exploreSorts[
      existingIndex
    ].direction =
      direction;

  } else {

    exploreSorts.push({
      field,
      direction
    });
  }

  renderExploreTable(
    getDrilledExplorerTransactions()
  );
}


function resetExploreSorts() {

  exploreSorts = [
    {
      field: "date",
      direction: "desc"
    }
  ];

  if (elements.mobileSortField) {
    elements.mobileSortField.value =
      "date";
  }

  if (elements.mobileSortDirection) {
    elements.mobileSortDirection.value =
      "desc";
  }

  renderExploreTable(
    getDrilledExplorerTransactions()
  );
}


function renderMobileSortSummary() {

  if (!elements.mobileSortSummary) {
    return;
  }

  if (!exploreSorts.length) {

    elements.mobileSortSummary.textContent =
      "No active sort.";

    return;
  }

  const labels = {
    date: "Date",
    person: "Person",
    category: "Category",
    item: "Item",
    type: "Type",
    needWant: "Need / Want",
    notes: "Notes",
    amount: "Amount"
  };

  const summary =
    exploreSorts.map(
      (sort, index) => {

        const label =
          labels[sort.field] ||
          formatItemLabel(
            sort.field
          );

        const arrow =
          sort.direction === "asc"
            ? "↑"
            : "↓";

        return (
          `${index + 1}. ` +
          `${label} ${arrow}`
        );
      }
    );

  elements.mobileSortSummary.textContent =
    `Active sort: ${summary.join(
      " · "
    )}`;
}


/******************************************************************************
 * DESKTOP / GENERAL TABLE SORTING
 ******************************************************************************/

function handleExploreTableSort(
  field,
  addToExisting = false
) {

  const existingIndex =
    exploreSorts.findIndex(
      sort =>
        sort.field === field
    );

  if (!addToExisting) {

    if (
      existingIndex === 0 &&
      exploreSorts.length === 1
    ) {

      exploreSorts[0].direction =
        exploreSorts[0].direction ===
        "asc"
          ? "desc"
          : "asc";

    } else {

      exploreSorts = [
        {
          field: field,
          direction:
            getDefaultSortDirection(
              field
            )
        }
      ];
    }

  } else {

    if (existingIndex >= 0) {

      exploreSorts[
        existingIndex
      ].direction =
        exploreSorts[
          existingIndex
        ].direction === "asc"
          ? "desc"
          : "asc";

    } else {

      exploreSorts.push({
        field: field,
        direction:
          getDefaultSortDirection(
            field
          )
      });
    }
  }

  updateExploreSortIndicators();

  renderExploreTable(
    getDrilledExplorerTransactions()
  );
}


function getDefaultSortDirection(
  field
) {

  if (
    field === "date" ||
    field === "amount"
  ) {
    return "desc";
  }

  return "asc";
}


function sortExplorerTransactions(
  transactions
) {

  return [...transactions].sort(
    (a, b) => {

      for (
        const sort of exploreSorts
      ) {

        const comparison =
          compareExplorerValues(
            a,
            b,
            sort.field
          );

        if (comparison !== 0) {

          return (
            sort.direction === "asc"
              ? comparison
              : -comparison
          );
        }
      }

      return 0;
    }
  );
}


function compareExplorerValues(
  a,
  b,
  field
) {

  if (field === "date") {

    return String(
      a.date || ""
    ).localeCompare(
      String(
        b.date || ""
      )
    );
  }

  if (field === "amount") {

    return (
      Number(a.amount || 0) -
      Number(b.amount || 0)
    );
  }

  const aValue =
    String(
      a[field] || ""
    )
      .trim()
      .toLowerCase();

  const bValue =
    String(
      b[field] || ""
    )
      .trim()
      .toLowerCase();

  return aValue.localeCompare(
    bValue
  );
}


function updateExploreSortIndicators() {

  document
    .querySelectorAll(
      ".table-sort-btn"
    )
    .forEach(button => {

      const field =
        button.dataset.sort;

      const index =
        exploreSorts.findIndex(
          sort =>
            sort.field === field
        );

      const indicator =
        button.querySelector(
          ".sort-indicator"
        );

      if (index < 0) {

        button.classList.remove(
          "sort-active"
        );

        if (indicator) {
          indicator.textContent = "";
        }

        return;
      }

      button.classList.add(
        "sort-active"
      );

      const sort =
        exploreSorts[index];

      if (indicator) {

        const arrow =
          sort.direction === "asc"
            ? "▲"
            : "▼";

        indicator.textContent =
          exploreSorts.length > 1
            ? `${index + 1}${arrow}`
            : arrow;
      }
    });

  renderMobileSortSummary();
}


function resetExploreFilters() {

  populateExploreYears();

  elements.explorePeriod.value =
    "ytd";

elements.exploreMonth.value =
  String(
    new Date().getMonth() + 1
  );

elements.exploreMonthGroup.hidden =
  true;

  elements.exploreWeekGroup.hidden =
    true;

  populateExploreWeeks();

  elements.explorePerson.value =
    "All";

  elements.exploreCategory.value =
    "All";

  populateExploreItems();

  elements.exploreItem.value =
    "All";

  elements.exploreType.value =
    "All";

  elements.exploreNeedWant.value =
    "All";

  elements.explorePet.value = "All";
  elements.explorePetGroup.hidden = true;
  elements.exploreMeasure.value = "spending";
  elements.exploreAverageByBreakdown.checked = false;

  elements.exploreSearch.value =
    "";

  elements.exploreBreakdown.value =
    "month";

  elements.exploreMetric.value =
    "dollars";

  elements.exploreStartDate.value =
    "";

  elements.exploreEndDate.value =
    "";

  elements.customDateControls.hidden =
    true;


exploreSorts = [
  {
    field: "date",
    direction: "desc"
  }
];


  updateExplorer();
}



/******************************************************************************
 * EXPLORER ACTIVE FILTERS
 ******************************************************************************/

function renderExploreFilterChips() {

  const filters =
    getExploreActiveFilters();


  elements.exploreFilterChips
    .replaceChildren();


  if (!filters.length) {

    elements.exploreActiveFilters.hidden =
      true;

    return;
  }


  elements.exploreActiveFilters.hidden =
    false;


  filters.forEach(filter => {

    const button =
      document.createElement("button");


    button.type =
      "button";

    button.className =
      "explore-filter-chip";


    const text =
      document.createElement("span");

    text.textContent =
      filter.label;


    const remove =
      document.createElement("span");

    remove.className =
      "filter-chip-remove";

    remove.textContent =
      "×";

    remove.setAttribute(
      "aria-hidden",
      "true"
    );


    button.append(
      text,
      remove
    );


    button.setAttribute(
      "aria-label",
      `Remove filter ${filter.label}`
    );


    button.addEventListener(
      "click",
      () => {
        clearExploreFilter(
          filter.key
        );
      }
    );


    elements.exploreFilterChips
      .appendChild(button);
  });
}


/***************************************************************************
* Define Which filters become chips
***************************************************************************/

function getExploreActiveFilters() {

  const filters = [];


  /*
   * YEAR
   */
  const year =
    elements.exploreYear.value;


  if (year) {

    filters.push({
      key: "year",
      label: `Year: ${year}`
    });
  }


  /*
   * PERIOD
   */
  const period =
    elements.explorePeriod.value;


  if (
    period &&
    period !== "ytd"
  ) {

    const periodLabel =
      elements.explorePeriod
        .selectedOptions[0]
        ?.textContent
        .trim();


    if (periodLabel) {

      filters.push({
        key: "period",
        label: periodLabel
      });
    }
  }


  /*
   * MONTH
   */
  if (
    period === "month"
  ) {

    const monthLabel =
      elements.exploreMonth
        .selectedOptions[0]
        ?.textContent
        .trim();


    if (monthLabel) {

      filters.push({
        key: "month",
        label: monthLabel
      });
    }
  }


  /*
   * WEEK
   */
  if (
    period === "week"
  ) {

    const weekLabel =
      elements.exploreWeek
        .selectedOptions[0]
        ?.textContent
        .trim();


    if (weekLabel) {

      filters.push({
        key: "week",
        label: weekLabel
      });
    }
  }


  /*
   * CUSTOM DATES
   */
  if (
    period === "custom"
  ) {

    const start =
      elements.exploreStartDate.value;

    const end =
      elements.exploreEndDate.value;


    let label =
      "Custom Dates";


    if (
      start &&
      end
    ) {

      label =
        `${formatShortDate(start)} – ${formatShortDate(end)}`;

    } else if (start) {

      label =
        `From ${formatShortDate(start)}`;

    } else if (end) {

      label =
        `Through ${formatShortDate(end)}`;
    }


    filters.push({
      key: "customDates",
      label: label
    });
  }


  addExploreFilterIfActive(
    filters,
    "person",
    elements.explorePerson,
    "All"
  );


  addExploreFilterIfActive(
    filters,
    "category",
    elements.exploreCategory,
    "All"
  );


  addExploreFilterIfActive(
    filters,
    "pet",
    elements.explorePet,
    "All"
  );


  addExploreFilterIfActive(
    filters,
    "item",
    elements.exploreItem,
    "All"
  );


  addExploreFilterIfActive(
    filters,
    "type",
    elements.exploreType,
    "All"
  );


  addExploreFilterIfActive(
    filters,
    "needWant",
    elements.exploreNeedWant,
    "All"
  );


  const search =
    elements.exploreSearch.value
      .trim();


  if (search) {

    filters.push({
      key: "search",
      label: `Search: ${search}`
    });
  }


  return filters;
}


/****************************************************
* Add Helper for Dropdown Chips
****************************************************/

function addExploreFilterIfActive(
  filters,
  key,
  selectElement,
  inactiveValue
) {

  if (
    selectElement.value ===
    inactiveValue
  ) {
    return;
  }


  const label =
    selectElement
      .selectedOptions[0]
      ?.textContent
      .trim();


  if (!label) {
    return;
  }


  filters.push({
    key: key,
    label: label
  });
}


/*******************************************************************
* Make Chips Removable
********************************************************************/

function clearExploreFilter(
  key
) {

  switch (key) {

    case "year":

      /*
       * Year is required for Explorer,
       * so removing it means return to
       * the current/default year.
       */
      populateExploreYears();
      break;


    case "period":

      elements.explorePeriod.value =
        "ytd";

      elements.exploreMonthGroup.hidden =
        true;

      elements.customDateControls.hidden =
        true;

      break;


    case "month":

      /*
       * Removing a month returns
       * Period to YTD.
       */
      elements.explorePeriod.value =
        "ytd";

      elements.exploreMonthGroup.hidden =
        true;

      break;


    case "week":

      elements.explorePeriod.value =
        "ytd";

      elements.exploreWeekGroup.hidden =
        true;

      break;


    case "customDates":

      elements.explorePeriod.value =
        "ytd";

      elements.exploreStartDate.value =
        "";

      elements.exploreEndDate.value =
        "";

      elements.customDateControls.hidden =
        true;

      break;


    case "person":

      elements.explorePerson.value =
        "All";

      break;


    case "category":

      elements.exploreCategory.value =
        "All";
      elements.explorePet.value = "All";
      elements.explorePetGroup.hidden = true;

      populateExploreItems();

      break;


    case "pet":
      elements.explorePet.value = "All";
      break;


    case "item":

      elements.exploreItem.value =
        "All";

      break;


    case "type":

      elements.exploreType.value =
        "All";

      break;


    case "needWant":

      elements.exploreNeedWant.value =
        "All";

      break;


    case "search":

      elements.exploreSearch.value =
        "";

      break;

  }


  updateExplorer();
}




/******************************************************************************
 * OVERVIEW CHARTS
 ******************************************************************************/

function renderOverviewCharts(
  transactions,
  totals
) {

  renderMoneyFlowChart(
    transactions
  );

  renderCategoryChart(
    transactions
  );

  renderNeedsWantsChart(
    totals
  );

  renderSpendingTrendChart(
    transactions
  );
}


function aggregateTransactionsByMonth(
  transactions
) {

  const months = new Map();


  transactions.forEach(
    transaction => {

      const key =
        transaction.monthKey;

      if (!key) {
        return;
      }


      if (!months.has(key)) {

        months.set(
          key,
          {
            key: key,

            year:
              Number(transaction.year),

            month:
              Number(transaction.month),

            income: 0,
            expense: 0,
            investment: 0
          }
        );
      }


      const month =
        months.get(key);


      month.income +=
        Number(transaction.income) || 0;

      month.expense +=
        Number(transaction.expense) || 0;

      month.investment +=
        Number(transaction.investment) || 0;
    }
  );


  return Array.from(
    months.values()
  ).sort(
    (a, b) =>
      a.key.localeCompare(b.key)
  );
}



function formatMonthLabel(
  year,
  month
) {

  const date =
    new Date(
      year,
      month - 1,
      1
    );


  return new Intl.DateTimeFormat(
    "en-US",
    {
      month: "short"
    }
  ).format(date);
}


/******************************************************************************
 * MONTHLY MONEY FLOW
 ******************************************************************************/

function renderMoneyFlowChart(
  transactions
) {

  const monthly =
    aggregateTransactionsByMonth(
      transactions
    );


  const usableMonths =
    monthly.filter(
      month =>
        month.income > 0
    );


  if (!usableMonths.length) {

    destroyChart(
      "moneyFlow"
    );

    elements.moneyFlowCanvas.hidden =
      true;

    elements.moneyFlowEmpty.hidden =
      false;

    return;
  }


  elements.moneyFlowCanvas.hidden =
    false;

  elements.moneyFlowEmpty.hidden =
    true;


  const labels = [];

  const expensePercentages = [];
  const investmentPercentages = [];
  const remainingPercentages = [];

  const actualValues = [];


  usableMonths.forEach(
    month => {

      labels.push(
        formatMonthLabel(
          month.year,
          month.month
        )
      );


      const remaining =
        month.income -
        month.expense -
        month.investment;


      const expensePct =
        month.expense /
        month.income;


      const investmentPct =
        month.investment /
        month.income;


      /*
       * Keep the displayed remaining portion
       * from going below zero.
       *
       * Overspending is communicated separately
       * through the tooltip.
       */
      const remainingPct =
        Math.max(
          remaining / month.income,
          0
        );


      /*
       * If expenses + investments exceed income,
       * the positive pieces would exceed 100%.
       *
       * Normalize them for the stacked visual,
       * while preserving the actual dollar
       * amounts separately.
       */
      const visualTotal =
        expensePct +
        investmentPct +
        remainingPct;


      expensePercentages.push(
        visualTotal > 0
          ? expensePct / visualTotal
          : 0
      );


      investmentPercentages.push(
        visualTotal > 0
          ? investmentPct / visualTotal
          : 0
      );


      remainingPercentages.push(
        visualTotal > 0
          ? remainingPct / visualTotal
          : 0
      );


      actualValues.push({
        income:
          month.income,

        expense:
          month.expense,

        investment:
          month.investment,

        remaining:
          remaining,

        overspent:
          remaining < 0
      });
    }
  );


  if (moneyFlowChart) {
    moneyFlowChart.destroy();
  }


  moneyFlowChart =
    new Chart(
      elements.moneyFlowCanvas,
      {

        type: "bar",


        data: {

          labels: labels,


          datasets: [

            {

              label:
                "Expenses",

              data:
                expensePercentages,

              backgroundColor:
                "#F2B84B",

              borderRadius: 5

            },


            {

              label:
                "Investments",

              data:
                investmentPercentages,

              backgroundColor:
                "#4EC1B1",

              borderRadius: 5

            },


            {

              label:
                "Remaining",

              data:
                remainingPercentages,

              backgroundColor:
                "#8FAF7B",

              borderRadius: 5

            }

          ]

        },


        options: {

          responsive: true,

          maintainAspectRatio: false,


          plugins: {

            legend: {
              position: "bottom"
            },


            tooltip: {

              callbacks: {

                label: context => {

                  const index =
                    context.dataIndex;


                  const actual =
                    actualValues[index];


                  const labels = {
                    0: "Expenses",
                    1: "Investments",
                    2: "Remaining"
                  };


                  const values = [
                    actual.expense,
                    actual.investment,
                    actual.remaining
                  ];


                  const percentage =
                    (
                      context.raw *
                      100
                    ).toFixed(1);


                  let text =
                    `${labels[context.datasetIndex]}: ` +
                    `${formatCurrency(
                      values[
                        context.datasetIndex
                      ]
                    )} (${percentage}%)`;


                  if (
                    actual.overspent &&
                    context.datasetIndex === 2
                  ) {

                    text +=
                      " — overspent";
                  }


                  return text;
                }

              }

            },


            datalabels: {

              color:
                "#ffffff",

              font: {
                weight: "bold"
              },


              formatter: value => {

                if (
                  value < 0.06
                ) {
                  return "";
                }


                return (
                  (
                    value *
                    100
                  ).toFixed(1) +
                  "%"
                );
              }

            }

          },


          scales: {

            x: {
              stacked: true
            },


            y: {

              stacked: true,

              beginAtZero: true,

              max: 1,


              ticks: {

                callback: value =>
                  `${Math.round(
                    value * 100
                  )}%`

              }

            }

          }

        }

      }
    );
}


/******************************************************************************
 * SPENDING BY CATEGORY
 ******************************************************************************/

function renderCategoryChart(
  transactions
) {

  const categoryTotals =
    new Map();


  transactions.forEach(
    transaction => {

      const expense =
        Number(
          transaction.expense
        ) || 0;


      if (expense <= 0) {
        return;
      }


      const category =
        transaction.category ||
        "uncategorized";


      categoryTotals.set(
        category,
        (
          categoryTotals.get(
            category
          ) || 0
        ) + expense
      );
    }
  );


  const categories =
    Array.from(
      categoryTotals.entries()
    )
      .map(
        ([category, total]) => ({
          category,
          total
        })
      )
      .sort(
        (a, b) =>
          b.total - a.total
      );


  if (!categories.length) {

    if (categoryChart) {
      categoryChart.destroy();
      categoryChart = null;
    }

    elements.categoryCanvas.hidden =
      true;

    elements.categoryChartEmpty.hidden =
      false;

    return;
  }


  elements.categoryCanvas.hidden =
    false;

  elements.categoryChartEmpty.hidden =
    true;


  if (categoryChart) {
    categoryChart.destroy();
  }


  const data =
    categories.map(
      category =>
        category.total
    );


  categoryChart =
    new Chart(
      elements.categoryCanvas,
      {

        type: "doughnut",

        data: {

          labels:
            categories.map(
              category =>
                formatItemLabel(
                  category.category
                )
            ),

          datasets: [

            {

              data: data,

              backgroundColor: [
                "#0E6F6B",
                "#51CAB9",
                "#AF8535",
                "#8FAF7B",
                "#0A4F52",
                "#D5A64A",
                "#74B6A8",
                "#9C8060"
              ],

              borderWidth: 2,

              borderColor:
                "#ffffff"

            }

          ]

        },


        options: {

          responsive: true,

          maintainAspectRatio: false,

          cutout: "58%",


          plugins: {

            legend: {

              position: "bottom",

              labels: {
                usePointStyle: true,
                padding: 16
              }

            },


            tooltip: {

              callbacks: {

                label: context => {

                  const total =
                    data.reduce(
                      (sum, value) =>
                        sum + value,
                      0
                    );


                  const percentage =
                    total > 0
                      ? (
                          context.raw /
                          total
                        ) * 100
                      : 0;


                  return (
                    `${context.label}: ` +
                    `${formatCurrency(
                      context.raw
                    )} ` +
                    `(${percentage.toFixed(
                      1
                    )}%)`
                  );
                }

              }

            },


            datalabels: {

              color: "#ffffff",

              font: {
                size: 11,
                weight: "bold"
              },

              formatter: (
                value,
                context
              ) => {

                const total =
                  context.dataset.data.reduce(
                    (sum, amount) =>
                      sum + amount,
                    0
                  );


                if (!total) {
                  return "";
                }


                const percentage =
                  value /
                  total;


                if (
                  percentage < 0.07
                ) {
                  return "";
                }


                return (
                  percentage * 100
                ).toFixed(0) + "%";
              }

            }

          }

        }

      }
    );
}


/******************************************************************************
 * NEEDS VS WANTS
 ******************************************************************************/

function renderNeedsWantsChart(
  totals
) {

  const data = [
    totals.needs,
    totals.wants,
    totals.unclassified
  ];


  const overall =
    data.reduce(
      (sum, amount) =>
        sum + amount,
      0
    );


  if (overall <= 0) {

    if (needsWantsChart) {
      needsWantsChart.destroy();
      needsWantsChart = null;
    }

    elements.needsWantsCanvas.hidden =
      true;

    elements.needsWantsEmpty.hidden =
      false;

    return;
  }


  elements.needsWantsCanvas.hidden =
    false;

  elements.needsWantsEmpty.hidden =
    true;


  if (needsWantsChart) {
    needsWantsChart.destroy();
  }


  needsWantsChart =
    new Chart(
      elements.needsWantsCanvas,
      {

        type: "doughnut",

        data: {

          labels: [
            "Needs",
            "Wants",
            "Unclassified"
          ],

          datasets: [

            {

              data: data,

              backgroundColor: [
                "#0E6F6B",
                "#AF8535",
                "#b9b9b9"
              ],

              borderColor:
                "#ffffff",

              borderWidth: 2

            }

          ]

        },


        options: {

          responsive: true,

          maintainAspectRatio: false,

          cutout: "58%",


          plugins: {

            legend: {

              position: "bottom",

              labels: {
                usePointStyle: true,
                padding: 16
              }

            },


            tooltip: {

              callbacks: {

                label: context => {

                  const percentage =
                    overall > 0
                      ? (
                          context.raw /
                          overall
                        ) * 100
                      : 0;


                  return (
                    `${context.label}: ` +
                    `${formatCurrency(
                      context.raw
                    )} ` +
                    `(${percentage.toFixed(
                      1
                    )}%)`
                  );
                }

              }

            },


            datalabels: {

              color: "#ffffff",

              font: {
                size: 12,
                weight: "bold"
              },

              formatter: value => {

                const percentage =
                  value /
                  overall;


                if (
                  percentage < 0.06
                ) {
                  return "";
                }


                return (
                  percentage * 100
                ).toFixed(0) + "%";
              }

            }

          }

        }

      }
    );
}


/******************************************************************************
 * SPENDING TREND
 ******************************************************************************/

function renderSpendingTrendChart(
  transactions
) {

  const monthly =
    aggregateTransactionsByMonth(
      transactions
    );


  const expenseMonths =
    monthly.filter(
      month =>
        month.expense > 0
    );


  if (!expenseMonths.length) {

    if (spendingTrendChart) {
      spendingTrendChart.destroy();
      spendingTrendChart = null;
    }

    elements.spendingTrendCanvas.hidden =
      true;

    elements.spendingTrendEmpty.hidden =
      false;

    return;
  }


  elements.spendingTrendCanvas.hidden =
    false;

  elements.spendingTrendEmpty.hidden =
    true;


  if (spendingTrendChart) {
    spendingTrendChart.destroy();
  }


  spendingTrendChart =
    new Chart(
      elements.spendingTrendCanvas,
      {

        type: "line",

        data: {

          labels:
            expenseMonths.map(
              month =>
                formatMonthLabel(
                  month.year,
                  month.month
                )
            ),

          datasets: [

            {

              label: "Expenses",

              data:
                expenseMonths.map(
                  month =>
                    month.expense
                ),

              borderColor:
                "#0E6F6B",

              backgroundColor:
                "rgba(14,111,107,0.12)",

              fill: true,

              tension: 0.3,

              pointRadius: 4,

              pointHoverRadius: 6

            }

          ]

        },


        options: {

          responsive: true,

          maintainAspectRatio: false,


          plugins: {

            legend: {
              display: false
            },


            tooltip: {

              callbacks: {

                label: context =>
                  `Expenses: ${formatCurrency(
                    context.raw
                  )}`

              }

            },


            datalabels: {
              display: false
            }

          },


          scales: {

            y: {

              beginAtZero: true,

              ticks: {

                callback: value =>
                  new Intl.NumberFormat(
                    "en-US",
                    {
                      style: "currency",
                      currency: "USD",
                      maximumFractionDigits: 0
                    }
                  ).format(value)

              }

            }

          }

        }

      }
    );
}





function destroyChart(
  chartName
) {

  if (
    chartName === "moneyFlow" &&
    moneyFlowChart
  ) {

    moneyFlowChart.destroy();
    moneyFlowChart = null;
  }
}




/********************************************************
* Render the KPIS 
********************************************************/


function renderDashboardKpis(totals) {

  elements.kpiIncome.textContent =
    formatCurrency(totals.income);

  elements.kpiExpenses.textContent =
    formatCurrency(totals.expenses);

  elements.kpiInvestments.textContent =
    formatCurrency(totals.investments);

  elements.kpiRemaining.textContent =
    formatCurrency(totals.remaining);

  elements.kpiSavingsRate.textContent =
    formatPercent(
      totals.savingsRate
    );

  if (
    totals.needs +
    totals.wants >
    0
  ) {

    elements.kpiNeedsWants.textContent =
      `${formatPercent(totals.needsPct)} / ${formatPercent(totals.wantsPct)}`;

  } else {

    elements.kpiNeedsWants.textContent =
      "-- / --";
  }


  elements.kpiRemaining.classList.toggle(
    "negative",
    totals.remaining < 0
  );
}


function formatPercent(value) {

  return (
    Number(value || 0) * 100
  ).toFixed(1) + "%";
}

/***************************************************************************
* Add Selection Summary
***************************************************************************/

function renderSelectionSummary(
  transactions
) {

  const year =
    elements.dashboardYear.value;

  const period =
    elements.dashboardPeriod
      .selectedOptions[0]
      ?.textContent
      .trim() || "";

  const person =
    elements.dashboardPerson.value;


  elements.selectionDescription.textContent =
    `${period} · ${year} · ${person}`;


  const count =
    transactions.length;


  elements.transactionCount.textContent =
    `${count} ${
      count === 1
        ? "transaction"
        : "transactions"
    }`;
}


/******************************************************************************
 * RECENT TRANSACTIONS
 ******************************************************************************/

function renderRecentTransactions(
  transactions
) {

  elements.recentTransactions
    .replaceChildren();


  /*
   * API already returns newest first,
   * but sort again defensively.
   */
  const recent =
    [...transactions]
      .sort(
        (a, b) =>
          b.date.localeCompare(a.date)
      )
      .slice(0, 8);


  if (!recent.length) {

    const empty =
      document.createElement("p");

    empty.className =
      "empty-state";

    empty.textContent =
      "No transactions match this selection.";

    elements.recentTransactions
      .appendChild(empty);

    return;
  }


  recent.forEach(
    transaction => {

      const row =
        document.createElement("div");

      row.className =
        "recent-transaction";


      const details =
        document.createElement("div");

      details.className =
        "recent-transaction-details";


      const title =
        document.createElement("strong");

      title.className =
        "recent-transaction-title";

      title.textContent =
        formatItemLabel(
          transaction.item
        );


      const meta =
        document.createElement("span");

      meta.className =
        "recent-transaction-meta";

      meta.textContent =
        buildTransactionMeta(
          transaction
        );


      details.append(
        title,
        meta
      );


      const amount =
        document.createElement("strong");

      amount.className =
        "recent-transaction-amount";

      amount.textContent =
        formatCurrency(
          transaction.amount
        );


      row.append(
        details,
        amount
      );


      elements.recentTransactions
        .appendChild(row);
    }
  );
}


function buildTransactionMeta(
  transaction
) {

  const pieces = [
    formatShortDate(
      transaction.date
    ),

    capitalizeWords(
      transaction.category
    )
  ];


  if (transaction.person) {
    pieces.push(
      transaction.person
    );
  }


  if (transaction.needWant) {
    pieces.push(
      transaction.needWant
    );
  }


  return pieces.join(" · ");
}


function formatShortDate(
  dateString
) {

  const date =
    parseApiDate(dateString);

  if (!date) {
    return "";
  }

  return new Intl.DateTimeFormat(
    "en-US",
    {
      month: "short",
      day: "numeric"
    }
  ).format(date);
}


function formatItemLabel(value) {

  return String(value || "")
    .split(/[-/]/)
    .map(capitalizeWords)
    .join(" / ");
}


function capitalizeWords(value) {

  return String(value || "")
    .replace(
      /\b\w/g,
      character =>
        character.toUpperCase()
    );
}





/******************************************************************************
 * CATEGORY, ITEM, TYPE, AND NEED/WANT LOGIC
 ******************************************************************************/

function handleCategoryChange() {
  populateItems();
  clearClassification();

  const category = getSelectedCategory();
  if (category && category.items.length === 1) {
    elements.item.value = category.items[0].value;
    applyItemDefaults();
  }
}

function populateItems() {
  const category = getSelectedCategory();
  elements.item.replaceChildren();

  if (!category) {
    elements.item.add(new Option("-- Select a category first --", ""));
    elements.item.disabled = true;
    return;
  }

  elements.item.disabled = false;
  elements.item.add(new Option("-- Select Item --", ""));

  category.items.forEach(item => {
    elements.item.add(new Option(item.label, item.value));
  });
}

function applyItemDefaults() {
  const item = getSelectedItem();

  if (!item) {
    clearClassification();
    return;
  }

  elements.type.value = item.type;
  setNeedWant(item.needWant);
  applySubscriptionOverride();
}

function applySubscriptionOverride() {
  const item = getSelectedItem();
  if (!item) return;

  const protectedTypes = new Set(["bill", "income", "investment"]);
  if (protectedTypes.has(item.type)) {
    elements.type.value = item.type;
    return;
  }

  const note = elements.notes.value.trim().toLowerCase();
  const isSubscription = SUBSCRIPTION_KEYWORDS.some(keyword =>
    note.includes(keyword)
  );

  elements.type.value = isSubscription ? "subscription" : item.type;
}

function clearClassification() {
  if (elements.type) elements.type.value = "";
  if (elements.need) elements.need.checked = false;
  if (elements.want) elements.want.checked = false;
  if (elements.incomeClass) elements.incomeClass.checked = false;
  if (elements.savingsClass) elements.savingsClass.checked = false;
}

function setNeedWant(value) {
  if (elements.need) elements.need.checked = value === "Need";
  if (elements.want) elements.want.checked = value === "Want";
  if (elements.incomeClass) elements.incomeClass.checked = value === "Income";
  if (elements.savingsClass) elements.savingsClass.checked = value === "Savings";
}

function getSelectedCategory() {
  return CATEGORY_DATA[elements.category.value] || null;
}

function getSelectedItem() {
  const category = getSelectedCategory();
  if (!category) return null;

  return category.items.find(item => item.value === elements.item.value) || null;
}

/******************************************************************************
 * AMOUNT AND DATE HELPERS
 ******************************************************************************/

function formatAmountInput() {
  const amount = parseAmount(elements.amount.value);
  if (amount !== null) {
    elements.amount.value = amount.toFixed(2);
  }
}

function parseAmount(value) {
  const normalized = String(value).replace(/[$,\s]/g, "");
  const amount = Number(normalized);
  return Number.isFinite(amount) && amount > 0 ? amount : null;
}

function setTodayAsDefault() {
  const now = new Date();
  const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];

  elements.date.value = localDate;
}

/******************************************************************************
 * PREVIEW
 ******************************************************************************/

function showPreview(event) {
  event.preventDefault();

  applySubscriptionOverride();
  formatAmountInput();

  if (!elements.form.reportValidity()) return;

  const amount = parseAmount(elements.amount.value);
  if (amount === null) {
    elements.amount.setCustomValidity("Enter an amount greater than 0.");
    elements.amount.reportValidity();
    elements.amount.setCustomValidity("");
    return;
  }


/******* This bit ensures the POST request contains needed Need/Want data ************/

const needWantValue = elements.need.checked
  ? "Need"
  : elements.want.checked
    ? "Want"
    : elements.incomeClass.checked
      ? "Income"
      : elements.savingsClass.checked
        ? "Savings"
        : "";

if (!needWantValue) {
  alert("Please select a classification.");
  return;
}

pendingFormData = new FormData(elements.form);

pendingFormData.set("amount", amount.toFixed(2));
pendingFormData.set("needWant", needWantValue);

/*************************************** ************/

  const item = getSelectedItem();
  const previewRows = [
    ["Category", getSelectedOptionText(elements.category)],
    ["Item", item ? item.label : getSelectedOptionText(elements.item)],
    ["Type", getSelectedOptionText(elements.type)],
    ["Classification", pendingFormData.get("needWant")],
    ["Note", pendingFormData.get("notes") || "-"]
  ];

  elements.receiptDate.textContent = formatDateForDisplay(pendingFormData.get("date"));
  elements.receiptAmount.textContent = formatCurrency(amount);
  renderPreviewRows(previewRows);

  elements.form.style.display = "none";
  elements.success.style.display = "none";
  elements.previewContainer.style.display = "block";
  elements.previewContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  subtleVibrate();
}

function renderPreviewRows(rows) {
  elements.previewContent.replaceChildren();

  rows.forEach(([label, value]) => {
    const row = document.createElement("div");
    const labelSpan = document.createElement("span");
    const valueSpan = document.createElement("span");

    labelSpan.textContent = label;
    valueSpan.textContent = value || "-";
    row.append(labelSpan, valueSpan);
    elements.previewContent.appendChild(row);
  });
}

function getSelectedOptionText(selectElement) {
  return selectElement.selectedOptions[0]?.textContent.trim() || "";
}

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(amount);
}

function formatDateForDisplay(dateString) {
  if (!dateString) return "";

  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(date);
}

function returnToForm() {
  elements.previewContainer.style.display = "none";
  elements.form.style.display = "block";
  elements.form.scrollIntoView({ behavior: "smooth", block: "start" });
}

/******************************************************************************
 * SUBMISSION
 ******************************************************************************/

async function submitTransaction() {
  if (!pendingFormData || isSubmitting) return;

  isSubmitting = true;
  setConfirmButtonState(true);

  try {
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      body: pendingFormData,
      redirect: "follow"
    });

    if (!response.ok) {
      throw new Error(`Submission failed with status ${response.status}.`);
    }

    const result = await readJsonResponse(response);
    if (result.status !== "success") {
      throw new Error(result.message || "The transaction could not be saved.");
    }

    showSuccessMessage();
  } catch (error) {
    console.error("Transaction submission failed:", error);
    alert(`Unable to save the transaction. ${error.message}`);
  } finally {
    isSubmitting = false;
    setConfirmButtonState(false);
  }
}

async function readJsonResponse(response) {
  const text = await response.text();

  try {
    return JSON.parse(text);
  } catch {
    throw new Error("The server returned an unexpected response.");
  }
}

function setConfirmButtonState(disabled) {
  elements.confirmButton.disabled = disabled;
  elements.confirmButton.textContent = disabled ? "Saving..." : "Confirm";
}




function showSuccessMessage() {

  /*
   * A transaction was just written to Google Sheets.
   * Dashboard should fetch fresh data next time it opens.
   */
  dashboardDataStale = true;

  elements.previewContainer.style.display = "none";
  elements.success.style.display = "block";

  subtleVibrate();

  window.setTimeout(
    resetFormAfterSuccess,
    SUCCESS_DISPLAY_MS
  );
}





function resetFormAfterSuccess() {
  elements.form.reset();
  pendingFormData = null;
  clearClassification();
  populateItems();
  setTodayAsDefault();

  elements.success.style.display = "none";
  elements.form.style.display = "block";
  elements.form.scrollIntoView({ behavior: "smooth", block: "start" });
}

/******************************************************************************
 * DEVICE AND SERVICE-WORKER HELPERS
 ******************************************************************************/

function subtleVibrate() {
  if ("vibrate" in navigator) {
    navigator.vibrate(25);
  }
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(error => {
      console.warn("Service worker registration failed:", error);
    });
  });
}

initializeApp();



