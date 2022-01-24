"use strict";

/* Переменные */
const buttonsTime = document.querySelectorAll('.workload__filter-functional-by-time-button');
const buttonsKindOfChart = document.querySelectorAll('.workload__filter-functional-kinds-of-chart-button');
const nowOnTurn = document.querySelector('.workload__filter-statistics-table-description-cell--quantity');
const statisticsByDay = document.querySelector('.workload__filter-statistics-table-description-cell--speed');
const workloadChartsContainer = document.querySelector('.workload__chart');
const workloadCharts = document.getElementsByClassName('.workload__chart-chart'); ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Константы */

const DATA_CALLS = [12, 18, 24, 29, 31, 34, 36, 38, 40, 41, 42, 35, 28, 26, 24, 21, 19, 16, 21, 26, 31, 36, 40, 39, 10]; ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Функция, отвечающая за генерацию случайного числа с плавающей точкой */

/*const getRandomFloat = (min, max, numbersAfterComma = 0) => {
  const resultNumber = Math.random() * (max - min) + min;
  return(resultNumber.toFixed(numbersAfterComma));
};*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Функция, которая создает элемент */

/*const createElement = (tagName, idName, className) => {
  const makeTag = document.createElement(tagName);
  makeTag.setAttribute('id', idName);
  makeTag.classList.add(className);
  makeTag.style.width = '100%';
  makeTag.style.height = '400px';
  return makeTag;
};*/

/* Цикл, который генерирует данные о звонках за вчера */

/*for (let i = 0; i < 24; i++) {
  dataCallsYesterday.push(+getRandomFloat(0, 50));
}*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Цикл, который генерирует данные о звонках за неделю */

/*for (let i = 0; i < 7; i++) {
  dataCallsWeek.push(+getRandomFloat(0, 50));
}*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Функция, которая определяет среднюю скорость приема звонка за промежуток */

/*const averageOfCall = (dataCalls) => {
  const summa = dataCalls.reduce((acc, item) => acc + item, 0);
  return summa;
};

const averageByYesterday = averageOfCall(dataCallsYesterday);
const averageByToday = averageOfCall(DATA_CALLS);
const averageByWeek = averageOfCall(dataCallsWeek);*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Функция, которая определяет статистику приема звонков за промежуток */

/*const statisticsOfCalls = (averageByDay) => {
  const quantity = Math.round((averageByDay / 24) / MINUTES_IN_HOUR * 100);
  const minutes = Math.floor(quantity / 60);
  const seconds = quantity % 60;
  const time = `00:0${minutes}:${seconds}`;
  return time;
};

const statisticsByYesterday = statisticsOfCalls(averageByYesterday);
const statisticsByToday = statisticsOfCalls(averageByToday);
const statisticsByWeek = statisticsOfCalls(averageByWeek);*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Функция, которая рисует график */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Функция, которая удаляет активный класс */

/*const deleteActiveClass = (button, activeClass) => {
  button.classList.remove(activeClass);
};*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Функция, которая меняет график, по нажатию на кнопку-переключатель */

/*const changeChartByButtonDate = (button, activeClass) => {

  // Повесили обработчик события на кнопку

  button.addEventListener('click', (evt) => {

    // Цикл, который удаляет у всех кнопок активный класс

    for (let j = 0; j < buttonsTime.length; j++) {
      deleteActiveClass(buttonsTime[j], 'workload__filter-functional-by-time-button--active');
    }

    // Добавим этой кнопке активный класс

    button.classList.add(activeClass);

    // Удалим у контейнера с графиками все его графики

    while (workloadChartsContainer.firstChild) {
      workloadChartsContainer.removeChild(workloadChartsContainer.lastChild);
    }

    // Делаем проверку на каждую кнопку. По нажатию на кнопку будет показываться соответствующий график

    if (evt.target === buttonsTime[0]) {

      statisticsByDay.textContent = statisticsByYesterday;
      const div = createElement('div', 'workload__chart-chart-yesterday', 'workload__chart-chart');
      workloadChartsContainer.appendChild(div);
      //toDrawChart(DATA_TIME, dataCallsYesterday, 'workload__chart-chart-yesterday');
    }
    if (evt.target === buttonsTime[1]) {
      statisticsByDay.textContent = statisticsByToday;
      const div = createElement('div', 'workload__chart-chart-today', 'workload__chart-chart');
      workloadChartsContainer.appendChild(div);
      //toDrawChart(DATA_TIME, DATA_CALLS, 'workload__chart-chart-today');
    }
    if (evt.target === buttonsTime[2]) {
      statisticsByDay.textContent = statisticsByWeek;
      const div = createElement('div', 'workload__chart-chart-week', 'workload__chart-chart');
      workloadChartsContainer.appendChild(div);
      //toDrawChart(dataTimeWeek, DATA_CALLS, 'workload__chart-chart-week');
    }
  });
};*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Цикл, который вешает функцию, по отрисовки графика на кнопку-переключатель */

/*for (let i = 0; i < buttonsTime.length; i++) {
  changeChartByButtonDate(buttonsTime[i], 'workload__filter-functional-by-time-button--active');
}*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*const changeChartByButtonKind = (button, activeClass) => {

  // Повесили обработчик события на кнопку

  button.addEventListener('click', (evt) => {

    // Цикл, который удаляет у всех кнопок активный класс

    for (let j = 0; j < buttonsKindOfChart.length; j++) {
      deleteActiveClass(buttonsKindOfChart[j], 'workload__filter-functional-kinds-of-chart--active');
    }

    // Добавим этой кнопке активный класс

    button.classList.add(activeClass);

    // Удалим у контейнера с графиками все его графики

    while (workloadChartsContainer.firstChild) {
      workloadChartsContainer.removeChild(workloadChartsContainer.lastChild);
    }

    // Делаем проверку на каждую кнопку. По нажатию на кнопку будет показываться соответствующий график

    if (evt.target === buttonsKindOfChart[0]) {
      const div = createElement('div', 'workload__chart-chart-yesterday', 'workload__chart-chart');
      workloadChartsContainer.appendChild(div);
      //toDrawChart(DATA_TIME, DATA_CALLS, 'workload__chart-chart-yesterday');
    }
    if (evt.target === buttonsKindOfChart[1]) {
      const div = createElement('div', 'workload__chart-chart-today', 'workload__chart-chart');
      workloadChartsContainer.appendChild(div);
      //toDrawChart(DATA_TIME, DATA_CALLS, 'workload__chart-chart-today');
    }
  });
};*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Цикл, который вешает функцию, по отрисовки графика на кнопку-переключатель */

/*for (let i = 0; i < buttonsKindOfChart.length; i++) {
  changeChartByButtonKind(buttonsKindOfChart[i], 'workload__filter-functional-kinds-of-chart--active');
}*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Обработчик событий, который меняет статистику по очереди, при обновлении страницы */

/*document.addEventListener('DOMContentLoaded', () => {
  statisticsByDay.textContent = statisticsByToday;
  nowOnTurn.textContent = getRandomFloat(0, 50);
  //toDrawChart(DATA_TIME, DATA_CALLS, 'workload__chart-chart-today');
});*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Chartist.js plugin to display a data label on top of the points in a line chart.
 *
 */

/* global Chartist */

(function (window, document, Chartist) {
  'use strict';

  const defaultOptions = {
    threshold: 0,
    classNames: {
      aboveThreshold: 'ct-threshold-above',
      middleThreshold: 'ct-threshold-middle',
      belowThreshold: 'ct-threshold-below'
    },
    maskNames: {
      aboveThreshold: 'ct-threshold-mask-above',
      middleThreshold: 'ct-threshold-mask-middle',
      belowThreshold: 'ct-threshold-mask-below'
    }
  };

  function createMasks(data, options) {
    // Select the defs element within the chart or create a new one
    const defs = data.svg.querySelector('defs') || data.svg.elem('defs'); // Project the threshold value on the chart Y axis

    const projectedThreshold = data.chartRect.height() - data.axisY.projectValue(options.threshold) + data.chartRect.y2;
    const width = data.svg.width();
    const height = data.svg.height();
    console.log(defs);
    console.log(projectedThreshold);
    console.log(width);
    console.log(height); // Create mask for upper part above threshold

    defs.elem('mask', {
      x: 0,
      y: 0,
      width: width,
      height: height,
      id: options.maskNames.aboveThreshold
    }).elem('rect', {
      x: 0,
      y: 0,
      width: width,
      height: projectedThreshold,
      fill: 'white'
    }); // Create mask for middle part threshold

    defs.elem('mask', {
      x: 0,
      y: 0,
      width: width,
      height: height,
      id: options.maskNames.middleThreshold
    }).elem('rect', {
      x: 0,
      y: 0,
      width: width,
      height: height,
      fill: 'yellow'
    }); // Create mask for lower part below threshold

    defs.elem('mask', {
      x: 0,
      y: 0,
      width: width,
      height: height,
      id: options.maskNames.belowThreshold
    }).elem('rect', {
      x: 0,
      y: projectedThreshold,
      width: width,
      height: height - projectedThreshold,
      fill: 'white'
    });
    return defs;
  }

  Chartist.plugins = Chartist.plugins || {};

  Chartist.plugins.ctThreshold = function (options) {
    options = Chartist.extend({}, defaultOptions, options);
    return function ctThreshold(chart) {
      if (chart instanceof Chartist.Line || chart instanceof Chartist.Bar) {
        chart.on('draw', data => {
          if (data.type === 'point') {
            // For points we can just use the data value and compare against the threshold in order to determine
            // the appropriate class
            data.element.addClass(data.value.y >= options.threshold ? options.classNames.aboveThreshold : options.classNames.belowThreshold);
            data.element.addClass(data.value.y === options.threshold ? options.classNames.aboveThreshold : options.classNames.middleThreshold);
          } else if (data.type === 'line' || data.type === 'bar' || data.type === 'area') {
            // Cloning the original line path, mask it with the upper mask rect above the threshold and add the
            // class for above threshold
            data.element.parent().elem(data.element._node.cloneNode(true)).attr({
              mask: 'url(#' + options.maskNames.aboveThreshold + ')'
            }).addClass(options.classNames.aboveThreshold);
            data.element.attr({
              mask: 'url(#' + options.maskNames.middleThreshold + ')'
            }).addClass(options.classNames.middleThreshold); // Use the original line path, mask it with the lower mask rect below the threshold and add the class
            // for blow threshold

            data.element.attr({
              mask: 'url(#' + options.maskNames.belowThreshold + ')'
            }).addClass(options.classNames.belowThreshold);
          }
        }); // On the created event, create the two mask definitions used to mask the line graphs

        chart.on('created', data => {
          createMasks(data, options);
        });
      }
    };
  };
})(window, document, Chartist);

const circles = document.querySelectorAll('circle');
console.log(circles);
const options1 = {
  width: 1200,
  height: 400,
  showArea: true,
  axisY: {
    onlyInteger: true
  },
  plugins: [Chartist.plugins.ctThreshold({
    threshold: 10
  })]
}; // Create a new line chart object where as first parameter we pass in a selector
// that is resolving to our chart container element. The Second parameter
// is the actual data object.

new Chartist.Line('.ct-chart', {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [DATA_CALLS]
}, {
  showArea: true,
  axisY: {
    onlyInteger: true
  },
  plugins: [Chartist.plugins.ctThreshold({
    threshold: 20
  })]
});