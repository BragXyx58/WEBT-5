import React from "react";
import "./App.css";
import micOff from "./mic-off.png";

export const App: React.FC = () => {
  const participants = [
    { name: "Присяжний Марк Сергійович", initials: "ПС" },
    { name: "Фатеев Руслан Викторович", initials: "ФВ", selected: true },
    { name: "Чмель Богдан Артемович", initials: "ЧА" },
    { name: "Зукуліс Катерина Анатоліївна", initials: "ЗА" },
    { name: "Цисар Андрій Дмитрович", initials: "ЦД" },
    { name: "Глоба Яна Вячеславівна", initials: "ГВ" },
  ];

  const gradients = [
    "radial-gradient(circle at center, #1a1a1a, #0c0c0c)",
    "radial-gradient(circle at center, #1a1a1a, #0c0c0c)",
    "radial-gradient(circle at top left, #202820, #0e0f0e)",
    "radial-gradient(circle at bottom left, #281c1c, #0e0d0d)",
    "radial-gradient(circle at bottom right, #281c1c, #0e0d0d)",
    "radial-gradient(circle at bottom left, #28251c, #0f0e0b)",
  ];

  const circleColors = [
    { bg: "#B8D9C3", color: "#1E3B23" },
    { bg: "#C7D2F5", color: "#222E67" },
    { bg: "#DCE8CC", color: "#2B3B1C" },
    { bg: "#E9D1D1", color: "#3B1E1E" },
    { bg: "#EFE2C8", color: "#4B3B1A" },
    { bg: "#CBE0DD", color: "#193935" },
  ];

  return (
    <div className="grid">
      {participants.map((p, i) => (
        <div
          key={i}
          className={`cell ${p.selected ? "selected" : ""}`}
          style={{ background: gradients[i] }}
        >
          <div
            className="initials"
            style={{
              backgroundColor: circleColors[i].bg,
              color: circleColors[i].color,
            }}
          >
            {p.initials}
          </div>

          <div className="name-bar">
            <span>{p.name}</span>
            {!p.selected && (
              <img src={micOff} alt="mic off" className="mic-icon" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
