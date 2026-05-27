// charts-states.jsx — Analytics & states artboards

// Small SVG bar chart helper
const BarChart = ({ data, width = 600, height = 200, stacked = false }) => {
  const max = stacked
    ? Math.max(...data.map(d => (d.a||0)+(d.b||0)+(d.c||0)))
    : Math.max(...data.map(d => d.v));
  const bw = (width - 40) / data.length - 8;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {[0,0.25,0.5,0.75,1].map((t,i) => (
        <g key={i}>
          <line x1="40" x2={width} y1={height-30-(height-50)*t} y2={height-30-(height-50)*t} stroke="var(--n-100)" strokeWidth="1"/>
          <text x="0" y={height-30-(height-50)*t+4} fontSize="10" fill="var(--n-400)" fontFamily="var(--ff-mono)">{Math.round(max*t/1000)}k</text>
        </g>
      ))}
      {data.map((d, i) => {
        const x = 40 + i*(bw + 8);
        if (stacked) {
          const total = (d.a||0)+(d.b||0)+(d.c||0);
          const totalH = ((height-50) * total) / max;
          const aH = ((height-50) * (d.a||0)) / max;
          const bH = ((height-50) * (d.b||0)) / max;
          const cH = ((height-50) * (d.c||0)) / max;
          let y = height - 30 - totalH;
          return (
            <g key={i}>
              <rect x={x} y={y} width={bw} height={aH} fill="var(--accent)" rx="2"/>
              <rect x={x} y={y+aH} width={bw} height={bH} fill="var(--p-300)" rx="0"/>
              <rect x={x} y={y+aH+bH} width={bw} height={cH} fill="var(--p-100)" rx="0"/>
              <text x={x+bw/2} y={height-12} fontSize="10" fill="var(--n-500)" textAnchor="middle">{d.l}</text>
            </g>
          );
        } else {
          const h = ((height-50) * d.v) / max;
          return (
            <g key={i}>
              <rect x={x} y={height-30-h} width={bw} height={h} fill={d.hi ? 'var(--accent)' : 'var(--p-200)'} rx="3"/>
              <text x={x+bw/2} y={height-12} fontSize="10" fill="var(--n-500)" textAnchor="middle">{d.l}</text>
            </g>
          );
        }
      })}
    </svg>
  );
};

// Line/area chart
const AreaChart = ({ data, width = 700, height = 220 }) => {
  const max = Math.max(...data.map(d => d.v)) * 1.1;
  const min = Math.min(...data.map(d => d.v)) * 0.95;
  const pts = data.map((d, i) => {
    const x = 40 + (i * (width - 60)) / (data.length - 1);
    const y = 20 + (height - 60) * (1 - (d.v - min) / (max - min));
    return [x, y];
  });
  const path = pts.map((p, i) => `${i ? 'L' : 'M'} ${p[0]} ${p[1]}`).join(' ');
  const area = path + ` L ${pts[pts.length-1][0]} ${height-30} L ${pts[0][0]} ${height-30} Z`;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <defs>
        <linearGradient id="ar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.18"/>
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0"/>
        </linearGradient>
      </defs>
      {[0,0.25,0.5,0.75,1].map((t,i) => (
        <g key={i}>
          <line x1="40" x2={width-20} y1={20+(height-60)*t} y2={20+(height-60)*t} stroke="var(--n-100)"/>
          <text x="0" y={20+(height-60)*t+4} fontSize="10" fill="var(--n-400)" fontFamily="var(--ff-mono)">{(max - (max-min)*t).toFixed(2)}</text>
        </g>
      ))}
      <path d={area} fill="url(#ar)"/>
      <path d={path} fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      {pts.map((p, i) => (
        <g key={i}>
          {i === pts.length - 1 && <circle cx={p[0]} cy={p[1]} r="6" fill="var(--accent)" opacity="0.18"/>}
          {i === pts.length - 1 && <circle cx={p[0]} cy={p[1]} r="3.5" fill="var(--accent)" stroke="#fff" strokeWidth="2"/>}
        </g>
      ))}
      {data.map((d, i) => {
        if (i % 2 !== 0 && i !== data.length - 1) return null;
        const x = 40 + (i * (width - 60)) / (data.length - 1);
        return <text key={i} x={x} y={height-10} fontSize="10" fill="var(--n-500)" textAnchor="middle">{d.l}</text>;
      })}
    </svg>
  );
};

// Donut
const Donut = ({ segments, size = 160, thickness = 22 }) => {
  const total = segments.reduce((s, x) => s + x.v, 0);
  const r = size/2 - thickness/2 - 2;
  const c = size / 2;
  let a = -Math.PI / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={c} cy={c} r={r} fill="none" stroke="var(--n-100)" strokeWidth={thickness}/>
      {segments.map((s, i) => {
        const len = (s.v / total) * Math.PI * 2;
        const x1 = c + r * Math.cos(a), y1 = c + r * Math.sin(a);
        a += len;
        const x2 = c + r * Math.cos(a), y2 = c + r * Math.sin(a);
        const large = len > Math.PI ? 1 : 0;
        return (
          <path key={i} d={`M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`}
            fill="none" stroke={s.c} strokeWidth={thickness} strokeLinecap="butt"/>
        );
      })}
    </svg>
  );
};

const ABCharts = () => (
  <div className="fx" style={{ width: '100%', height: '100%', padding: 48 }}>
    <div className="t-cap muted">04 · Patterns · Analytics</div>
    <div className="t-h1" style={{ marginTop: 6 }}>Графики и аналитика</div>
    <div className="t-body muted" style={{ marginTop: 10, maxWidth: 560 }}>
      Спокойные графики с&nbsp;одной акцентной линией на&nbsp;экране. Без&nbsp;3D
      и&nbsp;ярких градиентов — данные читабельнее.
    </div>

    <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 16 }}>
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div className="t-cap muted">Объём платежей · USD</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginTop: 6 }}>
              <span style={{ fontSize: 28, fontWeight: 600, color: 'var(--n-900)', letterSpacing: '-0.015em' }}>$&nbsp;4&nbsp;583&nbsp;200</span>
              <span className="badge success">+18,4% к&nbsp;прошлой неделе</span>
            </div>
          </div>
          <div className="segmented">
            <div className="seg">7д</div>
            <div className="seg active">30д</div>
            <div className="seg">QTD</div>
            <div className="seg">YTD</div>
          </div>
        </div>
        <div style={{ marginTop: 18 }}>
          <AreaChart width={680} height={220} data={[
            {l:'1', v: 88}, {l:'4', v: 96}, {l:'7', v: 102}, {l:'10', v: 94},
            {l:'13', v: 110}, {l:'16', v: 122}, {l:'19', v: 118},
            {l:'22', v: 132}, {l:'25', v: 148},
          ]}/>
        </div>
      </div>

      <div className="card">
        <div className="t-cap muted">Структура по&nbsp;валютам</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 14 }}>
          <Donut size={150} thickness={22} segments={[
            { v: 48, c: 'var(--accent)' },
            { v: 22, c: 'var(--p-400)' },
            { v: 16, c: 'var(--p-200)' },
            { v: 8,  c: '#c98410' },
            { v: 6,  c: 'var(--n-300)' },
          ]}/>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              ['USD', '48%', 'var(--accent)'],
              ['EUR', '22%', 'var(--p-400)'],
              ['CNY', '16%', 'var(--p-200)'],
              ['AED',  '8%', '#c98410'],
              ['Другие', '6%', 'var(--n-300)'],
            ].map(([n,p,c]) => (
              <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: 2, background: c }}/>
                <span className="t-sm" style={{ flex: 1 }}>{n}</span>
                <span className="fx-mono t-sm" style={{ fontWeight: 500 }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div className="t-cap muted">Платежи по&nbsp;странам · топ-5</div>
            <div className="t-sm muted" style={{ marginTop: 4 }}>За&nbsp;последние 30 дней</div>
          </div>
          <span className="badge accent">Май 2026</span>
        </div>
        <div style={{ marginTop: 18 }}>
          <BarChart width={600} height={200} data={[
            { l: 'Германия', v: 1240, hi: true },
            { l: 'Китай',    v: 980 },
            { l: 'ОАЭ',      v: 620 },
            { l: 'Турция',   v: 510 },
            { l: 'Индия',    v: 380 },
            { l: 'Италия',   v: 290 },
            { l: 'Сербия',   v: 180 },
          ]}/>
        </div>
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="t-cap muted">Курс USD/RUB · 30 дней</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <span className="fx-mono" style={{ fontSize: 22, fontWeight: 600, color: 'var(--n-900)' }}>91,6240</span>
            <span className="fx-mono t-xs" style={{ color: 'var(--c-success)' }}>+0,18</span>
          </div>
        </div>
        <div style={{ marginTop: 18 }}>
          <AreaChart width={600} height={200} data={[
            {l:'25.04', v: 90.12}, {l:'28', v: 90.45}, {l:'01.05', v: 90.92},
            {l:'04', v: 90.78}, {l:'07', v: 91.05}, {l:'10', v: 91.48},
            {l:'13', v: 91.62}, {l:'16', v: 91.34}, {l:'19', v: 91.50},
            {l:'22', v: 91.71}, {l:'25', v: 91.62},
          ]}/>
        </div>
      </div>
    </div>

    <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
      <KpiCard label="Обработано платежей" value="248" delta="+12 за неделю" tone="success"/>
      <KpiCard label="Средний срок" value="2,1 дн" delta="-0,3 дн" tone="success"/>
      <KpiCard label="Средняя сумма" value="$ 18 480" delta="+4,2%" tone="success"/>
      <KpiCard label="Доля отказов" value="0,8%" delta="-0,2 п.п." tone="success"/>
    </div>
  </div>
);

const KpiCard = ({ label, value, delta, tone }) => (
  <div className="card" style={{ padding: 18 }}>
    <div className="t-xs muted">{label}</div>
    <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-0.015em', marginTop: 6, color: 'var(--n-900)' }} className="fx-num">{value}</div>
    <div className="t-xs" style={{ color: tone === 'success' ? 'var(--c-success)' : 'var(--c-danger)', marginTop: 4 }}>{delta}</div>
  </div>
);

// ─── States ───
const ABStates = () => (
  <div className="fx" style={{ width: '100%', height: '100%', padding: 48 }}>
    <div className="t-cap muted">05 · States</div>
    <div className="t-h1" style={{ marginTop: 6 }}>Состояния</div>
    <div className="t-body muted" style={{ marginTop: 10, maxWidth: 560 }}>
      Пустые экраны, загрузка, ошибки, успех. Спокойная подача без&nbsp;
      картинок-стоков — простая&nbsp;геометрия и&nbsp;понятное действие.
    </div>

    <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
      {/* Empty */}
      <div className="card" style={{ padding: 36, textAlign: 'center', minHeight: 320, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 64, height: 64, borderRadius: 16, background: 'var(--accent-bg)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <IcInvoice size={32}/>
        </div>
        <div style={{ fontSize: 18, fontWeight: 600, marginTop: 16 }}>Пока нет платежей</div>
        <div className="t-sm muted" style={{ marginTop: 6, maxWidth: 320 }}>
          Создайте первый SWIFT-перевод или загрузите контракт — мы&nbsp;
          подскажем, какие документы понадобятся.
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 18 }}>
          <button className="btn btn-primary"><IcPlus size={16}/> Новый платёж</button>
          <button className="btn btn-outline"><IcUpload size={16}/> Загрузить контракт</button>
        </div>
      </div>

      {/* Loading skeleton */}
      <div className="card" style={{ padding: 24, minHeight: 320 }}>
        <div className="t-cap muted">Загрузка</div>
        <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[0,1,2,3].map((i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div className="sk" style={{ width: 36, height: 36, borderRadius: 50 }}/>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div className="sk" style={{ height: 12, width: `${50 + i * 8}%` }}/>
                <div className="sk" style={{ height: 10, width: '34%' }}/>
              </div>
              <div className="sk" style={{ height: 18, width: 80 }}/>
            </div>
          ))}
        </div>
      </div>

      {/* Error */}
      <div className="card" style={{ padding: 28, minHeight: 280 }}>
        <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--c-danger-bg)', color: 'var(--c-danger)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto' }}>
            <IcAlert size={22}/>
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 600 }}>Платёж отклонён банком-корреспондентом</div>
            <div className="t-sm muted" style={{ marginTop: 6 }}>Reason: incomplete remittance information in&nbsp;field&nbsp;70. Перевод вернётся на&nbsp;счёт в&nbsp;течение 2&nbsp;рабочих дней.</div>
            <div className="code-cell" style={{ marginTop: 14, fontSize: 12 }}>
              MT199 · RJCT · :70:/BNF/Insufficient data
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
              <button className="btn btn-primary btn-sm">Создать заново</button>
              <button className="btn btn-ghost btn-sm">Открыть журнал событий</button>
            </div>
          </div>
        </div>
      </div>

      {/* Success */}
      <div className="card" style={{ padding: 28, minHeight: 280, background: 'linear-gradient(180deg, var(--c-success-bg), var(--n-0) 70%)' }}>
        <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--c-success)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <IcCheck size={28}/>
        </div>
        <div style={{ fontSize: 18, fontWeight: 600, marginTop: 18 }}>Платёж принят в&nbsp;обработку</div>
        <div className="t-sm muted" style={{ marginTop: 6 }}>
          Перевод № P-12480 на&nbsp;<span style={{ color: 'var(--n-900)', fontWeight: 500 }}>€ 124 580,00</span> отправлен в&nbsp;SWIFT-сеть.
          Срок зачисления — 1–2&nbsp;рабочих дня.
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 18 }}>
          <button className="btn btn-secondary btn-sm"><IcDownload size={14}/> Платёжное поручение PDF</button>
          <button className="btn btn-ghost btn-sm">Отслеживать GPI</button>
        </div>
      </div>
    </div>
  </div>
);

Object.assign(window, { ABCharts, ABStates, KpiCard, BarChart, AreaChart, Donut });
