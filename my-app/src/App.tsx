import React, { useState } from 'react';
import './App.css';

interface MoonPhaseResults {
  ageInDays: string;
  ageAsPercentage: string;
  phaseName: string;
  phaseDescription: string;
}

const initialResults: MoonPhaseResults = {
  ageInDays: '23.67',
  ageAsPercentage: '39.67%',
  phaseName: 'Третья четверть',
  phaseDescription: 'Убывающая луна',
};

function App() {
  const [day, setDay] = useState<number>(18);
  const [month, setMonth] = useState<number>(2);
  const [year, setYear] = useState<number>(2007);
  const [precision, setPrecision] = useState<number>(10);
  const [results, setResults] = useState<MoonPhaseResults>(initialResults);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];
  const years = Array.from({ length: 51 }, (_, i) => 2025 - i);

  const handleCalculate = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="app-container">
      <div className="calculator-wrapper">
        <div className="calculator-container">
          <div className="header-container">
            <div className="header-icon-background">
              <img src="https://planetcalc.ru/img/32x32i.png" alt="Moon phase icon" className="header-icon" />
            </div>
            <h2 className="calculator-header">Фаза луны</h2>
          </div>

          <form className="calculator-form">
            <div className="form-inputs">
              <div className="date-selector">
                <label>Григорианская дата</label>
                <div className="date-dropdowns">
                  <select value={day} onChange={(e) => setDay(Number(e.target.value))}>
                    {days.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                  <select value={month} onChange={(e) => setMonth(Number(e.target.value))}>
                    {months.map((m, i) => <option key={i + 1} value={i + 1}>{m}</option>)}
                  </select>
                  <select value={year} onChange={(e) => setYear(Number(e.target.value))}>
                    {years.map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>
              </div>

              <div className="precision-slider">
                <label>Точность вычисления</label>
                <label className="precision-value">Знаков после запятой: {precision}</label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={precision}
                  onChange={(e) => setPrecision(Number(e.target.value))}
                />
              </div>
            </div>
            
            <button
              type="submit"
              className={`calculate-btn ${isAnimating ? 'animate' : ''}`}
              onClick={handleCalculate}
            >
              РАССЧИТАТЬ
            </button>
          </form>

          <div className="results-section">
            <div className="results-grid">
              <div className="result-group">
                <div className="result-item">
                  <span className="result-label">Возраст луны (дней)</span>
                  <span className="result-value">{results.ageInDays}</span>
                </div>
                <div className="main-result">
                  <span className="result-label">Направление</span>
                  <span className="result-value-large">{results.phaseDescription}</span>
                </div>
              </div>

              <div className="result-item">
                <span className="result-label">Возраст луны (процентах от полной)</span>
                <span className="result-value">{results.ageAsPercentage}</span>
              </div>
              <div className="result-item">
                <span className="result-label">Фаза луны</span>
                <span className="result-value">{results.phaseName}</span>
              </div>
            </div>

            <div className="action-icons-container">
               <div className="action-item">
                <img src="/Frame 1.svg" alt="Link icon" className="action-icon" />
                <span>ССЫЛКА</span>
              </div>
               <div className="action-item">
                <img src="/Frame 2.svg" alt="Save icon" className="action-icon" />
                <span>СОХРАНИТЬ</span>
              </div>
               <div className="action-item">
                <img src="/Frame 3.svg" alt="Widget icon" className="action-icon" />
                <span>ВИДЖЕТ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;