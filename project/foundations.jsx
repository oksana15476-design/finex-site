// foundations.jsx — Palette, Type, Spacing, Icons artboards

// ---- Brand / Cover ----
const ABCover = () => (
  <div className="fx" style={{ width: '100%', height: '100%', padding: 56, background: 'linear-gradient(180deg, var(--n-0), var(--n-25))', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <div>
      <div className="t-cap" style={{ color: 'var(--accent)' }}>Design System · v1.0</div>
      <div className="t-display" style={{ marginTop: 28, maxWidth: 720 }}>
        FINEX — финтех для&nbsp;ВЭД
      </div>
      <div className="t-body-lg muted" style={{ marginTop: 20, maxWidth: 620 }}>
        Дизайн-система для международных платежей через SWIFT,
        валютного контроля и&nbsp;экспорта в&nbsp;Россию. Подходит для
        корпоративных финансов, МСБ и&nbsp;ВЭД-специалистов.
      </div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, paddingTop: 32, borderTop: '1px solid var(--n-150)' }}>
      {[
        ['12', 'Базовых компонентов'],
        ['46', 'Иконок'],
        ['3', 'Палитры'],
        ['8', 'Размеров типографики'],
      ].map(([n, l]) => (
        <div key={l}>
          <div style={{ fontSize: 44, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--n-900)' }}>{n}</div>
          <div className="t-sm muted" style={{ marginTop: 4 }}>{l}</div>
        </div>
      ))}
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 'auto' }}>
      <Logo size={32} />
      <span className="t-sm muted">finex.ru · ВЭД · SWIFT · Валютный контроль</span>
    </div>
  </div>
);

const Logo = ({ size = 28 }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
    <svg width={size} height={size} viewBox="0 0 32 32">
      <rect width="32" height="32" rx="8" fill="var(--accent)"/>
      <path d="M9 9h14M9 16h10M9 23h7" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
    <span style={{ font: '700 18px/1 var(--ff-sans)', letterSpacing: '-0.02em', color: 'var(--n-900)' }}>FINEX</span>
  </div>
);

// ---- Palette artboard ----
const Swatch = ({ name, value, dark }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
    <div style={{
      height: 76, borderRadius: 'var(--r-md)', background: value,
      border: '1px solid rgba(0,0,0,0.06)',
      display: 'flex', alignItems: 'flex-end', padding: 10,
      color: dark ? '#fff' : 'var(--n-900)', fontWeight: 600, fontSize: 12,
    }}>{name}</div>
    <div className="fx-mono" style={{ fontSize: 11, color: 'var(--n-500)', textTransform: 'uppercase' }}>{value}</div>
  </div>
);

const Scale = ({ title, prefix, stops, computed }) => (
  <div>
    <div className="t-cap muted" style={{ marginBottom: 12 }}>{title}</div>
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${stops.length}, 1fr)`, gap: 10 }}>
      {stops.map((s) => (
        <Swatch
          key={s}
          name={`${prefix}-${s}`}
          value={computed[`${prefix}-${s}`]}
          dark={Number(s) >= 500}
        />
      ))}
    </div>
  </div>
);

const ABPalette = () => {
  const [computed, setComputed] = React.useState({});
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current) return;
    const cs = getComputedStyle(ref.current);
    const out = {};
    ['p','n'].forEach((px) => {
      [0,25,50,100,150,200,300,400,500,600,700,800,900,950].forEach((s) => {
        const v = cs.getPropertyValue(`--${px}-${s}`).trim();
        if (v) out[`${px}-${s}`] = v;
      });
    });
    setComputed(out);
  }, []);
  return (
    <div ref={ref} className="fx" style={{ width: '100%', height: '100%', padding: 48 }}>
      <div className="t-cap muted">02 · Foundations</div>
      <div className="t-h1" style={{ marginTop: 6 }}>Цвет</div>
      <div className="t-body muted" style={{ marginTop: 10, maxWidth: 560 }}>
        Палитра строится вокруг банковского синего и&nbsp;холодных серых.
        Доступно три направления — Navy, Cobalt, Midnight. Переключаются
        через Tweaks-панель.
      </div>

      <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 28 }}>
        <Scale title="Primary · меняется с палитрой" prefix="p" stops={[50,100,200,300,400,500,600,700,800,900]} computed={computed} />
        <Scale title="Neutrals · slate" prefix="n" stops={[0,50,100,200,300,400,500,600,700,800,900]} computed={computed} />

        <div>
          <div className="t-cap muted" style={{ marginBottom: 12 }}>Семантические</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {[
              ['Success', 'var(--c-success)', 'var(--c-success-bg)'],
              ['Warning', 'var(--c-warning)', 'var(--c-warning-bg)'],
              ['Danger',  'var(--c-danger)',  'var(--c-danger-bg)'],
              ['Info',    'var(--c-info)',    'var(--c-info-bg)'],
            ].map(([name, fg, bg]) => (
              <div key={name} style={{ padding: 14, borderRadius: 12, background: bg, border: '1px solid rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ width: 14, height: 14, borderRadius: 4, background: fg }}/>
                  <span style={{ fontWeight: 600, color: fg }}>{name}</span>
                </div>
                <div className="fx-mono" style={{ fontSize: 11, color: 'var(--n-500)', marginTop: 8, textTransform: 'uppercase' }}>
                  bg · fg
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ---- Typography artboard ----
const TypeRow = ({ name, cls, sample, meta }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr 180px', alignItems: 'baseline', gap: 24, padding: '14px 0', borderBottom: '1px solid var(--n-100)' }}>
    <div className="t-cap muted">{name}</div>
    <div className={cls} style={{ color: 'var(--n-900)' }}>{sample}</div>
    <div className="fx-mono t-xs muted">{meta}</div>
  </div>
);

const ABTypography = () => (
  <div className="fx" style={{ width: '100%', height: '100%', padding: 48 }}>
    <div className="t-cap muted">02 · Foundations</div>
    <div className="t-h1" style={{ marginTop: 6 }}>Типографика</div>
    <div className="t-body muted" style={{ marginTop: 10, maxWidth: 580 }}>
      Onest — основная гарнитура (русский + латиница). JetBrains Mono — для&nbsp;
      кодов SWIFT/BIC/IBAN, номеров счетов и&nbsp;табличных значений.
    </div>

    <div style={{ marginTop: 32 }}>
      <TypeRow name="Display"  cls="t-display"  sample="Платежи без границ"     meta="56 / 60 · 600 · -2.5%" />
      <TypeRow name="H1"       cls="t-h1"       sample="Международный перевод"  meta="40 / 44 · 600 · -2%"   />
      <TypeRow name="H2"       cls="t-h2"       sample="Заявка на оплату"        meta="28 / 34 · 600 · -1.5%" />
      <TypeRow name="H3"       cls="t-h3"       sample="Контрагенты и сделки"   meta="22 / 28 · 600 · -1%"  />
      <TypeRow name="H4"       cls="t-h4"       sample="Сводка по валютам"      meta="18 / 24 · 600"        />
      <TypeRow name="Body LG"  cls="t-body-lg"  sample="Поручение принято в обработку." meta="16 / 25 · 400"        />
      <TypeRow name="Body"     cls="t-body"     sample="Курс ЦБ обновляется каждые 15 минут." meta="14 / 22 · 400"        />
      <TypeRow name="Small"    cls="t-sm muted" sample="Срок зачисления — 1–3 рабочих дня." meta="13 / 20 · 400"        />
      <TypeRow name="Caption"  cls="t-cap muted" sample="Реквизиты бенефициара"   meta="11 · 600 · UPPER · 6%" />
    </div>

    <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
      <div className="card">
        <div className="t-cap muted" style={{ marginBottom: 10 }}>Onest · Sans</div>
        <div style={{ font: '300 28px/1.1 var(--ff-sans)', color: 'var(--n-900)' }}>А Б В Г Д Е Ж З И</div>
        <div style={{ font: '500 28px/1.1 var(--ff-sans)', color: 'var(--n-900)', marginTop: 6 }}>а б в г д е ж з и</div>
        <div style={{ font: '700 28px/1.1 var(--ff-sans)', color: 'var(--n-900)', marginTop: 6 }}>0 1 2 3 4 5 6 7 8 9</div>
        <div className="t-sm muted" style={{ marginTop: 12 }}>300 · 400 · 500 · 600 · 700</div>
      </div>
      <div className="card">
        <div className="t-cap muted" style={{ marginBottom: 10 }}>JetBrains Mono</div>
        <div className="fx-mono" style={{ fontSize: 18, color: 'var(--n-900)' }}>SBERRUMM</div>
        <div className="fx-mono" style={{ fontSize: 18, color: 'var(--n-900)', marginTop: 4 }}>DE89 3704 0044 0532 0130 00</div>
        <div className="fx-mono" style={{ fontSize: 18, color: 'var(--n-900)', marginTop: 4 }}>USD 124,580.00</div>
        <div className="t-sm muted" style={{ marginTop: 12 }}>400 · 500 · 600</div>
      </div>
    </div>
  </div>
);

// ---- Spacing & Grid ----
const ABSpacing = () => (
  <div className="fx" style={{ width: '100%', height: '100%', padding: 48 }}>
    <div className="t-cap muted">02 · Foundations</div>
    <div className="t-h1" style={{ marginTop: 6 }}>Сетка, отступы, радиусы</div>
    <div className="t-body muted" style={{ marginTop: 10, maxWidth: 560 }}>
      База шага — 4px. Радиусы умеренные: банковский интерфейс ценит
      строгость, поэтому не&nbsp;используем больше 20px.
    </div>

    <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36 }}>
      <div>
        <div className="t-cap muted" style={{ marginBottom: 14 }}>Шкала отступов</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[[1,4],[2,8],[3,12],[4,16],[5,20],[6,24],[8,32],[10,40],[12,48],[16,64]].map(([t, px]) => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div className="fx-mono t-xs muted" style={{ width: 60 }}>sp-{t}</div>
              <div style={{ width: px, height: 16, background: 'var(--accent)', borderRadius: 3 }}/>
              <div className="t-sm muted">{px}px</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="t-cap muted" style={{ marginBottom: 14 }}>Радиусы</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[['xs',6],['sm',8],['md',10],['lg',14],['xl',20],['full',999]].map(([t, px]) => (
            <div key={t} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 80, height: 60, background: 'var(--accent-bg)', border: '1px solid var(--accent)', borderRadius: px }}/>
              <div className="fx-mono t-xs muted">r-{t} · {px === 999 ? '∞' : `${px}px`}</div>
            </div>
          ))}
        </div>

        <div className="t-cap muted" style={{ marginTop: 28, marginBottom: 14 }}>Тени</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[['sh-1','низкая','var(--sh-1)'],['sh-2','средняя','var(--sh-2)'],['sh-3','высокая','var(--sh-3)']].map(([t,l,sh]) => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 60, height: 36, background: 'var(--n-0)', boxShadow: sh, borderRadius: 8, border: '1px solid var(--n-100)' }}/>
              <div className="fx-mono t-xs muted" style={{ width: 60 }}>{t}</div>
              <div className="t-sm muted">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 36 }}>
      <div className="t-cap muted" style={{ marginBottom: 14 }}>Сетка 12 колонок · 80px gutter · 1280px container</div>
      <div style={{ position: 'relative', height: 120, background: 'var(--n-25)', borderRadius: 12, border: '1px solid var(--n-100)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: '12px 32px', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 16 }}>
          {Array.from({length: 12}).map((_, i) => (
            <div key={i} style={{ background: 'var(--accent-bg)', borderRadius: 6, border: '1px dashed var(--accent)' }}/>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ---- Iconography ----
const ICON_GROUPS = [
  ['Платежи и финансы', ['IcSwift','IcExchange','IcWallet','IcCard','IcBank','IcInvoice','IcDoc','IcRuble','IcSend']],
  ['Навигация', ['IcArrowRight','IcArrowLeft','IcArrowUp','IcArrowDown','IcArrowSwap','IcChevronDown','IcChevronRight']],
  ['Действия', ['IcPlus','IcMinus','IcCheck','IcX','IcSearch','IcFilter','IcMore','IcUpload','IcDownload']],
  ['Аналитика', ['IcChart','IcTrend','IcGrid','IcList','IcClock','IcCal','IcBox']],
  ['Сервис', ['IcUser','IcUsers','IcBriefcase','IcBell','IcSettings','IcLock','IcEye','IcShield','IcGlobe','IcInfo','IcAlert','IcStar','IcLogout']],
];

const ABIcons = () => (
  <div className="fx" style={{ width: '100%', height: '100%', padding: 48 }}>
    <div className="t-cap muted">02 · Foundations</div>
    <div className="t-h1" style={{ marginTop: 6 }}>Иконки</div>
    <div className="t-body muted" style={{ marginTop: 10, maxWidth: 560 }}>
      Линейный набор, 24×24, обводка 1.6px. Все&nbsp;иконки используют
      <span className="fx-mono"> currentColor</span> — наследуют цвет родителя.
    </div>

    <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 28 }}>
      {ICON_GROUPS.map(([label, names]) => (
        <div key={label}>
          <div className="t-cap muted" style={{ marginBottom: 14 }}>{label}</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(9, 1fr)', gap: 10 }}>
            {names.map((n) => {
              const Cmp = window[n];
              return (
                <div key={n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '14px 6px', border: '1px solid var(--n-100)', borderRadius: 10, background: 'var(--n-0)' }}>
                  <div style={{ color: 'var(--n-800)' }}><Cmp size={22}/></div>
                  <div className="fx-mono" style={{ fontSize: 10, color: 'var(--n-400)' }}>{n.replace('Ic','')}</div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>

    <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
      <div className="card">
        <div className="t-cap muted">Размеры</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 14, color: 'var(--n-800)' }}>
          <IcSwift size={16}/><IcSwift size={20}/><IcSwift size={24}/><IcSwift size={32}/>
        </div>
        <div className="fx-mono t-xs muted" style={{ marginTop: 8 }}>16 · 20 · 24 · 32</div>
      </div>
      <div className="card">
        <div className="t-cap muted">Веса</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 14, color: 'var(--n-800)' }}>
          <IcWallet size={24} stroke={1.2}/><IcWallet size={24} stroke={1.6}/><IcWallet size={24} stroke={2}/>
        </div>
        <div className="fx-mono t-xs muted" style={{ marginTop: 8 }}>1.2 · 1.6 · 2.0</div>
      </div>
      <div className="card">
        <div className="t-cap muted">В контексте</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 14 }}>
          <span className="badge accent"><IcCheck size={12}/> Зачислено</span>
          <span className="badge warning"><IcClock size={12}/> Обработка</span>
        </div>
      </div>
    </div>
  </div>
);

Object.assign(window, { ABCover, ABPalette, ABTypography, ABSpacing, ABIcons, Logo });
