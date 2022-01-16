/* Переменные */

const buttonsTime = document.querySelectorAll('.workload__filter-functional-by-time-button');
const buttonsKindOfChart = document.querySelectorAll('.workload__filter-functional-kinds-of-chart-button');
const nowOnTurn = document.querySelector('.workload__filter-statistics-table-description-cell--quantity');
const statisticsByDay = document.querySelector('.workload__filter-statistics-table-description-cell--speed');
const workloadChartsContainer = document.querySelector('.workload__chart');
const workloadCharts = document.getElementsByClassName('.workload__chart-chart');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Константы */

const DATA_CALLS = [12, 18, 24, 29, 31, 34, 36, 38, 40, 41, 42, 35, 28, 26, 24, 21, 19, 16, 21, 26, 31, 36, 40, 39, 38, 40, 42, 43, 43, 44, 40, 36, 37, 40, 43, 43, 43, 43, 36, 29, 25, 22];
const DATA_TIME = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
const dataCallsYesterday = [];
const dataCallsWeek = [];
const dataTimeWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const MINUTES_IN_HOUR = 60;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Функция, отвечающая за генерацию случайного числа с плавающей точкой */

const getRandomFloat = (min, max, numbersAfterComma = 0) => {
  const resultNumber = Math.random() * (max - min) + min;
  return(resultNumber.toFixed(numbersAfterComma));
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Функция, которая создает элемент */

const createElement = (tagName, idName, className) => {
  const makeTag = document.createElement(tagName);
  makeTag.setAttribute('id', idName);
  makeTag.classList.add(className);
  makeTag.style.width = '100%';
  makeTag.style.height = '400px';
  return makeTag;
};

/* Цикл, который генерирует данные о звонках за вчера */

for (let i = 0; i < 24; i++) {
  dataCallsYesterday.push(+getRandomFloat(0, 50));
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Цикл, который генерирует данные о звонках за неделю */

for (let i = 0; i < 7; i++) {
  dataCallsWeek.push(+getRandomFloat(0, 50));
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Функция, которая определяет среднюю скорость приема звонка за промежуток */

const averageOfCall = (dataCalls) => {
  const summa = dataCalls.reduce((acc, item) => acc + item, 0);
  return summa;
};

const averageByYesterday = averageOfCall(dataCallsYesterday);
const averageByToday = averageOfCall(DATA_CALLS);
const averageByWeek = averageOfCall(dataCallsWeek);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Функция, которая определяет статистику приема звонков за промежуток */

const statisticsOfCalls = (averageByDay) => {
  const quantity = Math.round((averageByDay / 24) / MINUTES_IN_HOUR * 100);
  const minutes = Math.floor(quantity / 60);
  const seconds = quantity % 60;
  const time = `00:0${minutes}:${seconds}`;
  return time;
};

const statisticsByYesterday = statisticsOfCalls(averageByYesterday);
const statisticsByToday = statisticsOfCalls(averageByToday);
const statisticsByWeek = statisticsOfCalls(averageByWeek);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Функция, которая рисует график */

const toDrawChart = (dataTime, dataCalls, id) => {
  const d = new liteChart('chart', {
    animate: {
      show: true,
      duration: 0.5,
    },
    axisX: {
      show: true,
      color: 'deepskyblue',
      width: 2,
      value: '',
      minValue: 0,
      maxValue: 0,
    },
    axisY: {
      show: true,
      color: 'deepskyblue',
      width: 2,
      value: '',
      minValue: 0,
      maxValue: 50,
    },
    eventCoord: {
      x: 0,
      y: 0,
    },
    fill: 'gradient',
    gridX: {
      show: true,
      interval: 0,
      fill: 1,
      label: {
        show: true,
      },
      stroke:'#e9edf1',
      width:2,
      dasharray:'1',
      linecap:'square',
    },
    gridY: {
      show: true,
      interval: 0,
      fill: 1,
      label: {
        show: true,
      },
      stroke:'#e9edf1',
      width:2,
      dasharray:'1',
      linecap:'round',
    },
    labels: {
      show: true,
      fontColor: 'black',
      fontSize: 16,
      fontFamily: 'sans-serif',
      fontWeight: '300',
    },
    legends: {
      table: {
        show: false,
        position: {
          x: 'center',
          y: 370,
        },
        direction: 'horizontal',
      },
      fill: '#ffffff',
    },
    line: {
      width: 3,
      style: 'straight',
      shadow: false,
      dasharray: 0,
    },
    padding: {
      top: 70,
      right: 20,
      bottom: 70,
      left: 0,
    },
    point: {
      show: true,
      radius: 2,
      strokeWidth: 10,
      stroke: 'green',
    },
    tooltip: {
      show: false,
      backgroundColor: 'deepskyblue',
      fontColor: '#000000',
    },
    valueOnliteChart: {
      show: false,
    },
  });

  // Set labels
  //d.setLabels(['00:00', '00:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00', '05:30', '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30']);
  d.setLabels(dataTime);

  // Set legends and values
  d.addLegend({'name': 'Звонков', 'stroke': 'orange', 'fill': '#ffffff', 'values': dataCalls});
  //d.addLegend({'name': 'Day', 'stroke': 'orange', 'fill': '#fff', 'values': data});

  // Inject chart into DOM object
  const div = document.getElementById(id);
  d.inject(div);

  // Draw
  d.draw();
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Функция, которая удаляет активный класс */

const deleteActiveClass = (button, activeClass) => {
  button.classList.remove(activeClass);
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Функция, которая меняет график, по нажатию на кнопку-переключатель */

const changeChartByButtonDate = (button, activeClass) => {

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
      toDrawChart(DATA_TIME, dataCallsYesterday, 'workload__chart-chart-yesterday');
    }
    if (evt.target === buttonsTime[1]) {
      statisticsByDay.textContent = statisticsByToday;
      const div = createElement('div', 'workload__chart-chart-today', 'workload__chart-chart');
      workloadChartsContainer.appendChild(div);
      toDrawChart(DATA_TIME, DATA_CALLS, 'workload__chart-chart-today');
    }
    if (evt.target === buttonsTime[2]) {
      statisticsByDay.textContent = statisticsByWeek;
      const div = createElement('div', 'workload__chart-chart-week', 'workload__chart-chart');
      workloadChartsContainer.appendChild(div);
      toDrawChart(dataTimeWeek, DATA_CALLS, 'workload__chart-chart-week');
    }
  });
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Цикл, который вешает функцию, по отрисовки графика на кнопку-переключатель */

for (let i = 0; i < buttonsTime.length; i++) {
  changeChartByButtonDate(buttonsTime[i], 'workload__filter-functional-by-time-button--active');
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const changeChartByButtonKind = (button, activeClass) => {

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
      toDrawChart(DATA_TIME, DATA_CALLS, 'workload__chart-chart-yesterday');
    }
    if (evt.target === buttonsKindOfChart[1]) {
      const div = createElement('div', 'workload__chart-chart-today', 'workload__chart-chart');
      workloadChartsContainer.appendChild(div);
      toDrawChart(DATA_TIME, DATA_CALLS, 'workload__chart-chart-today');
    }
  });
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Цикл, который вешает функцию, по отрисовки графика на кнопку-переключатель */

for (let i = 0; i < buttonsKindOfChart.length; i++) {
  changeChartByButtonKind(buttonsKindOfChart[i], 'workload__filter-functional-kinds-of-chart--active');
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Обработчик событий, который меняет статистику по очереди, при обновлении страницы */

document.addEventListener('DOMContentLoaded', () => {
  statisticsByDay.textContent = statisticsByToday;
  nowOnTurn.textContent = getRandomFloat(0, 50);
  toDrawChart(DATA_TIME, DATA_CALLS, 'workload__chart-chart-today');
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const circles = document.querySelectorAll('circle');
console.log(circles);
