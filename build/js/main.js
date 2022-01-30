"use strict";

/* Переменные */
const buttonsTime = document.querySelectorAll('.workload__filter-functional-by-time-button');
const nowOnTurn = document.querySelector('.workload__filter-statistics-table-description-cell--quantity');
const statisticsByDay = document.querySelector('.workload__filter-statistics-table-description-cell--speed');
const workloadChartsContainer = document.querySelector('.workload__chart');
const workloadCharts = document.getElementsByClassName('.workload__chart-chart');
const buttonYesterday = document.querySelector('.workload__filter-functional-by-time-button-yesterday-value');
const buttonToday = document.querySelector('.workload__filter-functional-by-time-button-today-value'); ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Константы */
//const DATA_TIME = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];

const DATA_TIME = ['09', '10', '11', '12', '13', '14', '15', '16', '17', '18'];
const dataCallsToday = [];
const dataCallsYesterday = [];
const dataCallsWeek = [];
const MINUTES_IN_HOUR = 60;
const yesterdayDate = new Date(Date.now() - 86400000); ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Функция, отвечающая за генерацию случайного числа с плавающей точкой */

const getRandomFloat = function (min, max) {
  let numbersAfterComma = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  const resultNumber = Math.random() * (max - min) + min;
  return resultNumber.toFixed(numbersAfterComma);
}; ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Функция, которая отвечает за правильный формат времени */
// Массив дней недели
//const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
// Функция, которая добавляет 0 перед числом, которое меньше 10


const addZero = element => element > 10 ? element : `0${element}`; // Функция, которая возвращает время в необходимом формате


const getUserTime = function () {
  let time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  //const year = time.getFullYear();
  const month = addZero(time.getMonth() + 1);
  const day = addZero(time.getDate()); //const dayOfWeek = daysOfWeek[time.getDay()];
  //const hour = time.getHours();
  //const minute = time.getMinutes();
  //const second = time.getSeconds();

  return `${day}.${month}`;
};

const formattedYesterdayDate = getUserTime(yesterdayDate);
const formattedTodayDate = getUserTime();
/* Цикл, который генерирует данные о звонках за сегодня */

for (let i = 0; i < 10; i++) {
  dataCallsToday.push(+getRandomFloat(0, 50));
} ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Цикл, который генерирует данные о звонках за вчера */


for (let i = 0; i < 10; i++) {
  dataCallsYesterday.push(+getRandomFloat(0, 50));
} ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Цикл, который генерирует данные о звонках за неделю */


for (let i = 0; i < 7; i++) {
  dataCallsWeek.push(+getRandomFloat(0, 50));
} ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Функция, которая определяет среднюю скорость приема звонка за промежуток */


const averageOfCall = dataCalls => {
  const summa = dataCalls.reduce((acc, item) => acc + item, 0);
  return summa;
};

const averageByYesterday = averageOfCall(dataCallsYesterday);
const averageByToday = averageOfCall(dataCallsToday);
const averageByWeek = averageOfCall(dataCallsWeek); //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Функция, которая определяет статистику приема звонков за промежуток */

const statisticsOfCalls = averageByDay => {
  const quantity = Math.round(averageByDay / 24 / MINUTES_IN_HOUR * 150);
  const minutes = Math.floor(quantity / 60);
  const seconds = quantity % 60;
  const time = `00:0${minutes}:${seconds}`;
  return time;
};

const statisticsByYesterday = statisticsOfCalls(averageByYesterday);
const statisticsByToday = statisticsOfCalls(averageByToday);
const statisticsByWeek = statisticsOfCalls(averageByWeek); //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Настройки для 1-ого графика */

const settings1 = {
  chartPaddingTop: 20,
  chartPaddingRight: 50,
  chartPaddingBottom: 50,
  chartPaddingLeft: 30,
  width: '100%',
  height: 500,
  fullWidth: true,
  showLine: true,
  showPoint: true,
  showArea: false,
  areaBase: 0,
  lineSmooth: false,
  low: 0,
  high: 50,
  reverseData: false,
  axisYShowGrid: true,
  axisYShowLabel: true,
  axisYoffset: 50,
  axisYLabelOffsetX: 0,
  axisYLabelOffsetY: 5,
  axisYScaleMinSpace: 0,
  axisYOnlyInteger: true,
  axisXShowGrid: true,
  axisXShowLabel: true,
  axisXOffset: 0,
  axisXLabelOffsetX: -12,
  axisXLabelOffsetY: 0,
  axisXScaleMinSpace: 0,
  axisXOnlyInteger: true
};
const data1 = {
  labels: DATA_TIME,
  series: [dataCallsToday]
};
const options1 = {
  chartPadding: {
    top: settings1.chartPaddingTop,
    right: settings1.chartPaddingRight,
    bottom: settings1.chartPaddingBottom,
    left: settings1.chartPaddingLeft
  },
  width: settings1.width,
  height: settings1.height,
  fullWidth: settings1.fullWidth,
  showLine: settings1.showLine,
  showPoint: settings1.showPoint,
  showArea: settings1.showArea,
  areaBase: settings1.areaBase,
  lineSmooth: settings1.lineSmooth,
  low: settings1.low,
  high: settings1.high,
  reverseData: settings1.reverseData,
  axisY: {
    showGrid: settings1.axisYShowGrid,
    showLabel: settings1.axisYShowLabel,
    offset: settings1.axisYoffset,
    labelOffset: {
      x: settings1.axisYLabelOffsetX,
      y: settings1.axisYLabelOffsetY
    },
    scaleMinSpace: settings1.axisYScaleMinSpace,
    onlyInteger: settings1.axisYOnlyInteger,
    labelInterpolationFnc: function (value) {
      return value;
    }
  },
  axisX: {
    showGrid: settings1.axisXShowGrid,
    showLabel: settings1.axisXShowLabel,
    offset: settings1.axisXOffset,
    labelOffset: {
      x: settings1.axisXLabelOffsetX,
      y: settings1.axisXLabelOffsetY
    },
    scaleMinSpace: settings1.axisXScaleMinSpace,
    onlyInteger: settings1.axisXOnlyInteger,
    labelInterpolationFnc: function (value) {
      return value;
    }
  }
}; /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Функция, которая рисует график */

const chart1 = new Chartist.Line('.ct-chart', data1, options1); ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Функция, которая делает линию графика градиентой */

chart1.on('draw', context => {
  if (context.type === 'line') {
    context.element.attr({
      style: 'stroke: url(#line-id)'
    });
  }
}); /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Сэттаймаут для графика */

const toDrawCurrentChart = () => {
  setTimeout(() => {
    /* Переменные */
    const verticalLines = document.querySelectorAll('.ct-vertical');
    const firstVerticalLine = verticalLines[0];
    const horizontalLines = document.querySelectorAll('.ct-horizontal');
    const firstHorizontalLine = horizontalLines[0];
    const chart = document.querySelector('.ct-chart-line');
    const myChart = document.querySelector('#myChart');
    const hoverVerticalLine = myChart.querySelector('.hoverVerticalLine');
    const points = chart.querySelectorAll('.ct-point');
    const balloon = document.querySelector('.balloon');
    const balloonDescription = balloon.querySelector('.balloon__information-description');
    const ballonValue = balloon.querySelector('.balloon__information-value');
    const labelsOfAxisX = document.querySelectorAll('.ct-end'); ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /* Константы */

    const strokeWidthDefault = 11;
    const strokeWidthHover = 29;
    const balloonWidth = balloon.offsetWidth;
    const balloonHeight = balloon.offsetHeight; ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /* Функция, которая устанавливает настройки осей */

    const toChangeViewOfAxises = function (axisX, axisY, axisColor, axisWidth) {
      let axisDasharray = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'none';
      axisX.style = `stroke: ${axisColor}; stroke-width: ${axisWidth}px; stroke-dasharray: ${axisDasharray};`;
      axisY.style = `stroke: ${axisColor}; stroke-width: ${axisWidth}px; stroke-dasharray: ${axisDasharray};`;
    };

    toChangeViewOfAxises(firstVerticalLine, firstHorizontalLine, '#22C4CE', 3); ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /* Функция, которая задает точка градиент */

    const toGivePointColor = point => {
      if (point.getAttribute('y2') > settings1.height - 100) {
        point.style = 'stroke: #01B31D';
      } else if (point.getAttribute('y2') > settings1.height - 150) {
        point.style = 'stroke: #b1ee08';
      } else if (point.getAttribute('y2') > settings1.height - 200) {
        point.style = 'stroke: #FFD979';
      } else if (point.getAttribute('y2') > settings1.height - 250) {
        point.style = 'stroke: #E35F00';
      } else if (point.getAttribute('y2') > settings1.height - 300) {
        point.style = 'stroke: #d70206';
      } else if (point.getAttribute('y2') > settings1.height - 350) {
        point.style = 'stroke: #940103';
      } else {
        point.style = 'stroke: #420103';
      }
    }; ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /* Пройдемся циклом по всем точкам и зададим им градиент */


    for (let k = 0; k < points.length; k++) {
      toGivePointColor(points[k]);
    } ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /* Функция, которая отрисовывает балуны */


    const showBalloon = point => {
      point.addEventListener('mouseover', () => {
        for (let i = 0; i < points.length; i++) {
          if (points[i].getAttribute('y2') > settings1.height - 100) {
            points[i].style = `stroke: #01B31D; stroke-width: ${strokeWidthDefault}px;`;
            balloonDescription.style = 'color: #01B31D;';
          } else if (points[i].getAttribute('y2') > settings1.height - 150) {
            points[i].style = `stroke: #b1ee08; stroke-width: ${strokeWidthDefault}px;`;
            balloonDescription.style = 'color: #b1ee08;';
          } else if (points[i].getAttribute('y2') > settings1.height - 200) {
            points[i].style = `stroke: #FFD979; stroke-width: ${strokeWidthDefault}px;`;
            balloonDescription.style = 'color: #FFD979;';
          } else if (points[i].getAttribute('y2') > settings1.height - 250) {
            points[i].style = `stroke: #E35F00; stroke-width: ${strokeWidthDefault}px;`;
            balloonDescription.style = 'color: #E35F00;';
          } else if (points[i].getAttribute('y2') > settings1.height - 300) {
            points[i].style = `stroke: #d70206; stroke-width: ${strokeWidthDefault}px;`;
            balloonDescription.style = 'color: #d70206;';
          } else if (points[i].getAttribute('y2') > settings1.height - 350) {
            points[i].style = `stroke: #940103; stroke-width: ${strokeWidthDefault}px;`;
            balloonDescription.style = 'color: #940103;';
          } else {
            points[i].style = `stroke: #420103; stroke-width: ${strokeWidthDefault}px;`;
            balloonDescription.style = 'color: #420103;';
          }
        }

        const pointX = point.getAttribute('x1');
        const pointY = point.getAttribute('y2');
        const pointValue = point.getAttribute('ct:value');

        if (point.getAttribute('y2') > settings1.height - 100) {
          point.style = `stroke: #01B31D; stroke-width: ${strokeWidthHover}px;`;
          balloonDescription.style = 'color: #01B31D;';
        } else if (point.getAttribute('y2') > settings1.height - 150) {
          point.style = `stroke: #b1ee08; stroke-width: ${strokeWidthHover}px;`;
          balloonDescription.style = 'color: #b1ee08;';
        } else if (point.getAttribute('y2') > settings1.height - 200) {
          point.style = `stroke: #FFD979; stroke-width: ${strokeWidthHover}px;`;
          balloonDescription.style = 'color: #FFD979;';
        } else if (point.getAttribute('y2') > settings1.height - 250) {
          point.style = `stroke: #E35F00; stroke-width: ${strokeWidthHover}px;`;
          balloonDescription.style = 'color: #E35F00;';
        } else if (point.getAttribute('y2') > settings1.height - 300) {
          point.style = `stroke: #d70206; stroke-width: ${strokeWidthHover}px;`;
          balloonDescription.style = 'color: #d70206;';
        } else if (point.getAttribute('y2') > settings1.height - 350) {
          point.style = `stroke: #940103; stroke-width: ${strokeWidthHover}px;`;
          balloonDescription.style = 'color: #940103;';
        } else {
          point.style = `stroke: #420103; stroke-width: ${strokeWidthHover}px;`;
          balloonDescription.style = 'color: #420103;';
        }

        chart.appendChild(hoverVerticalLine);
        const lastLineX1 = point.getAttribute('x1');
        const lastLineX2 = point.getAttribute('x2');
        const lastLineY2 = point.getAttribute('y2');
        hoverVerticalLine.setAttribute('x1', lastLineX1);
        hoverVerticalLine.setAttribute('x2', lastLineX2);
        hoverVerticalLine.setAttribute('y1', lastLineY2);
        hoverVerticalLine.setAttribute('y2', settings1.height - 50);
        ballonValue.textContent = pointValue;
        balloon.addEventListener('mouseover', () => {
          for (let i = 0; i < points.length; i++) {
            if (points[i].getAttribute('y2') > settings1.height - 100) {
              points[i].style = `stroke: #01B31D; stroke-width: ${strokeWidthDefault}px;`;
              balloonDescription.style = 'color: #01B31D;';
            } else if (points[i].getAttribute('y2') > settings1.height - 150) {
              points[i].style = `stroke: #b1ee08; stroke-width: ${strokeWidthDefault}px;`;
              balloonDescription.style = 'color: #b1ee08;';
            } else if (points[i].getAttribute('y2') > settings1.height - 200) {
              points[i].style = `stroke: #FFD979; stroke-width: ${strokeWidthDefault}px;`;
              balloonDescription.style = 'color: #FFD979;';
            } else if (points[i].getAttribute('y2') > settings1.height - 250) {
              points[i].style = `stroke: #E35F00; stroke-width: ${strokeWidthDefault}px;`;
              balloonDescription.style = 'color: #E35F00;';
            } else if (points[i].getAttribute('y2') > settings1.height - 300) {
              points[i].style = `stroke: #d70206; stroke-width: ${strokeWidthDefault}px;`;
              balloonDescription.style = 'color: #d70206;';
            } else if (points[i].getAttribute('y2') > settings1.height - 350) {
              points[i].style = `stroke: #940103; stroke-width: ${strokeWidthDefault}px;`;
              balloonDescription.style = 'color: #940103;';
            } else {
              points[i].style = `stroke: #420103; stroke-width: ${strokeWidthDefault}px;`;
              balloonDescription.style = 'color: #420103;';
            }
          }

          balloon.style = `opacity: 1; top: ${pointY - balloonHeight}px; left: ${pointX - balloonWidth / 2}px;`;

          if (point.getAttribute('y2') > settings1.height - 100) {
            point.style = `stroke: #01B31D; stroke-width: ${strokeWidthHover}px;`;
            balloonDescription.style = 'color: #01B31D;';
          } else if (point.getAttribute('y2') > settings1.height - 150) {
            point.style = `stroke: #b1ee08; stroke-width: ${strokeWidthHover}px;`;
            balloonDescription.style = 'color: #b1ee08;';
          } else if (point.getAttribute('y2') > settings1.height - 200) {
            point.style = `stroke: #FFD979; stroke-width: ${strokeWidthHover}px;`;
            balloonDescription.style = 'color: #FFD979;';
          } else if (point.getAttribute('y2') > settings1.height - 250) {
            point.style = `stroke: #E35F00; stroke-width: ${strokeWidthHover}px;`;
            balloonDescription.style = 'color: #E35F00;';
          } else if (point.getAttribute('y2') > settings1.height - 300) {
            point.style = `stroke: #d70206; stroke-width: ${strokeWidthHover}px;`;
            balloonDescription.style = 'color: #d70206;';
          } else if (point.getAttribute('y2') > settings1.height - 350) {
            point.style = `stroke: #940103; stroke-width: ${strokeWidthHover}px;`;
            balloonDescription.style = 'color: #940103;';
          } else {
            point.style = `stroke: #420103; stroke-width: ${strokeWidthHover}px;`;
            balloonDescription.style = 'color: #420103;';
          }

          chart.appendChild(hoverVerticalLine);
        });
        balloon.style = `display: flex; top: ${pointY - balloonHeight}px; left: ${pointX - balloonWidth / 2}px;`;
      });
      point.addEventListener('mouseout', () => {
        balloon.style = 'display: none;';

        for (let i = 0; i < points.length; i++) {
          if (points[i].getAttribute('y2') > settings1.height - 100) {
            points[i].style = `stroke: #01B31D; stroke-width: ${strokeWidthDefault}px;`;
            balloonDescription.style = 'color: #01B31D;';
          } else if (points[i].getAttribute('y2') > settings1.height - 150) {
            points[i].style = `stroke: #b1ee08; stroke-width: ${strokeWidthDefault}px;`;
            balloonDescription.style = 'color: #b1ee08;';
          } else if (points[i].getAttribute('y2') > settings1.height - 200) {
            points[i].style = `stroke: #FFD979; stroke-width: ${strokeWidthDefault}px;`;
            balloonDescription.style = 'color: #FFD979;';
          } else if (points[i].getAttribute('y2') > settings1.height - 250) {
            points[i].style = `stroke: #E35F00; stroke-width: ${strokeWidthDefault}px;`;
            balloonDescription.style = 'color: #E35F00;';
          } else if (points[i].getAttribute('y2') > settings1.height - 300) {
            points[i].style = `stroke: #d70206; stroke-width: ${strokeWidthDefault}px;`;
            balloonDescription.style = 'color: #d70206;';
          } else if (points[i].getAttribute('y2') > settings1.height - 350) {
            points[i].style = `stroke: #940103; stroke-width: ${strokeWidthDefault}px;`;
            balloonDescription.style = 'color: #940103;';
          } else {
            points[i].style = `stroke: #420103; stroke-width: ${strokeWidthDefault}px;`;
            balloonDescription.style = 'color: #420103;';
          }
        }

        chart.removeChild(hoverVerticalLine);
        balloon.addEventListener('mouseout', () => {
          balloon.style = 'display: none;';

          for (let i = 0; i < points.length; i++) {
            if (points[i].getAttribute('y2') > settings1.height - 100) {
              points[i].style = `stroke: #01B31D; stroke-width: ${strokeWidthDefault}px;`;
              balloonDescription.style = 'color: #01B31D;';
            } else if (points[i].getAttribute('y2') > settings1.height - 150) {
              points[i].style = `stroke: #b1ee08; stroke-width: ${strokeWidthDefault}px;`;
              balloonDescription.style = 'color: #b1ee08;';
            } else if (points[i].getAttribute('y2') > settings1.height - 200) {
              points[i].style = `stroke: #FFD979; stroke-width: ${strokeWidthDefault}px;`;
              balloonDescription.style = 'color: #FFD979;';
            } else if (points[i].getAttribute('y2') > settings1.height - 250) {
              points[i].style = `stroke: #E35F00; stroke-width: ${strokeWidthDefault}px;`;
              balloonDescription.style = 'color: #E35F00;';
            } else if (points[i].getAttribute('y2') > settings1.height - 300) {
              points[i].style = `stroke: #d70206; stroke-width: ${strokeWidthDefault}px;`;
              balloonDescription.style = 'color: #d70206;';
            } else if (points[i].getAttribute('y2') > settings1.height - 350) {
              points[i].style = `stroke: #940103; stroke-width: ${strokeWidthDefault}px;`;
              balloonDescription.style = 'color: #940103;';
            } else {
              points[i].style = `stroke: #420103; stroke-width: ${strokeWidthDefault}px;`;
              balloonDescription.style = 'color: #420103;';
            }
          }

          chart.removeChild(hoverVerticalLine);
        });
      });
    };

    for (let i = 0; i < points.length; i++) {
      showBalloon(points[i]);

      for (let j = 0; j < points.length; j++) {
        if (points[j].getAttribute('y2') > settings1.height - 100) {
          points[j].style = `stroke: #01B31D; stroke-width: ${strokeWidthDefault}px;`;
          balloonDescription.style = 'color: #01B31D;';
        } else if (points[j].getAttribute('y2') > settings1.height - 150) {
          points[j].style = `stroke: #b1ee08; stroke-width: ${strokeWidthDefault}px;`;
          balloonDescription.style = 'color: #b1ee08;';
        } else if (points[j].getAttribute('y2') > settings1.height - 200) {
          points[j].style = `stroke: #FFD979; stroke-width: ${strokeWidthDefault}px;`;
          balloonDescription.style = 'color: #FFD979;';
        } else if (points[j].getAttribute('y2') > settings1.height - 250) {
          points[j].style = `stroke: #E35F00; stroke-width: ${strokeWidthDefault}px;`;
          balloonDescription.style = 'color: #E35F00;';
        } else if (points[j].getAttribute('y2') > settings1.height - 300) {
          points[j].style = `stroke: #d70206; stroke-width: ${strokeWidthDefault}px;`;
          balloonDescription.style = 'color: #d70206;';
        } else if (points[j].getAttribute('y2') > settings1.height - 350) {
          points[j].style = `stroke: #940103; stroke-width: ${strokeWidthDefault}px;`;
          balloonDescription.style = 'color: #940103;';
        } else {
          points[j].style = `stroke: #420103; stroke-width: ${strokeWidthDefault}px;`;
          balloonDescription.style = 'color: #420103;';
        }
      }
    }
  }, 0);
};

toDrawCurrentChart(); ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Функция, которая удаляет активный класс */

const deleteActiveClass = (button, activeClass) => {
  button.classList.remove(activeClass);
}; ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Функция, которая меняет график, по нажатию на кнопку-переключатель */


const changeChartByButtonDate = (button, activeClass) => {
  // Повесили обработчик события на кнопку
  button.addEventListener('click', evt => {
    // Цикл, который удаляет у всех кнопок активный класс
    for (let j = 0; j < buttonsTime.length; j++) {
      deleteActiveClass(buttonsTime[j], 'workload__filter-functional-by-time-button--active');
    } // Добавим этой кнопке активный класс


    button.classList.add(activeClass);
    const chart2 = new Chartist.Line('.ct-chart', data1, options1);
    chart2.on('draw', context => {
      if (context.type === 'line') {
        context.element.attr({
          style: 'stroke: url(#line-id)'
        });
      }
    });
    toDrawCurrentChart(); // Удалим у контейнера с графиками все его графики

    /*while (workloadChartsContainer.firstChild) {
      workloadChartsContainer.removeChild(workloadChartsContainer.lastChild);
    }*/
    // Делаем проверку на каждую кнопку. По нажатию на кнопку будет показываться соответствующий график

    if (evt.target === buttonsTime[0]) {
      statisticsByDay.textContent = statisticsByYesterday; //const div = createElement('div', 'workload__chart-chart-yesterday', 'workload__chart-chart');
      //workloadChartsContainer.appendChild(div);
      //toDrawChart(DATA_TIME, dataCallsYesterday, 'workload__chart-chart-yesterday');
    }

    if (evt.target === buttonsTime[1]) {
      statisticsByDay.textContent = statisticsByToday; //const div = createElement('div', 'workload__chart-chart-today', 'workload__chart-chart');
      //workloadChartsContainer.appendChild(div);
      //toDrawChart(DATA_TIME, dataCallsToday, 'workload__chart-chart-today');
    }

    if (evt.target === buttonsTime[2]) {
      statisticsByDay.textContent = statisticsByWeek; //const div = createElement('div', 'workload__chart-chart-week', 'workload__chart-chart');
      //workloadChartsContainer.appendChild(div);
      //toDrawChart(dataTimeWeek, dataCallsToday, 'workload__chart-chart-week');
    }
  });
}; ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Цикл, который вешает функцию, по отрисовки графика на кнопку-переключатель */


for (let i = 0; i < buttonsTime.length; i++) {
  changeChartByButtonDate(buttonsTime[i], 'workload__filter-functional-by-time-button--active');
} /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Обработчик событий, который меняет статистику по очереди, при обновлении страницы */


document.addEventListener('DOMContentLoaded', () => {
  statisticsByDay.textContent = statisticsByToday;
  nowOnTurn.textContent = getRandomFloat(0, 50);
  buttonToday.textContent = formattedTodayDate;
  buttonYesterday.textContent = formattedYesterdayDate; //toDrawChart(DATA_TIME, dataCallsToday, 'workload__chart-chart-today');
}); /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////