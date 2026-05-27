// components.jsx — base UI components artboards

// ─── Buttons ───
const ABButtons = () => (
  <div className="fx" style={{ width: '100%', height: '100%', padding: 48 }}>
    <div className="t-cap muted">03 · Components</div>
    <div className="t-h1" style={{ marginTop: 6 }}>Кнопки</div>
    <div className="t-body muted" style={{ marginTop: 10, maxWidth: 560 }}>
      Пять стилей × три размера. Primary — единственный «синий» CTA на экране.
      В критичных операциях используется Danger.
    </div>

    <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 28 }}>
      <Row label="Primary">
        <button className="btn btn-primary"><IcSend size={16}/> Отправить платёж</button>
        <button className="btn btn-primary btn-sm">Подтвердить</button>
        <button className="btn btn-primary btn-lg"><IcPlus size={18}/> Новый платёж</button>
        <button className="btn btn-primary" disabled>Недоступно</button>
      </Row>

      <Row label="Secondary">
        <button className="btn btn-secondary">Отмена</button>
        <button className="btn btn-secondary"><IcDownload size={16}/> Выгрузить</button>
        <button className="btn btn-secondary btn-sm">Сохранить как черновик</button>
      </Row>

      <Row label="Outline">
        <button className="btn btn-outline"><IcFilter size={16}/> Фильтры</button>
        <button className="btn btn-outline btn-sm">Все валюты</button>
        <button className="btn btn-outline">Просмотр PDF</button>
      </Row>

      <Row label="Ghost">
        <button className="btn btn-ghost">Назад</button>
        <button className="btn btn-ghost"><IcMore size={16}/></button>
        <button className="btn btn-ghost btn-sm">Очистить</button>
      </Row>

      <Row label="Danger">
        <button className="btn btn-danger"><IcX size={16}/> Отозвать платёж</button>
        <button className="btn btn-danger btn-sm">Удалить</button>
      </Row>

      <div>
        <div className="t-cap muted" style={{ marginBottom: 12 }}>Состояния</div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-primary">Обычное</button>
          <button className="btn btn-primary" style={{ background: 'var(--accent-hover)' }}>Hover</button>
          <button className="btn btn-primary" style={{ background: 'var(--accent-pressed)' }}>Pressed</button>
          <button className="btn btn-primary" style={{ boxShadow: 'var(--sh-focus)' }}>Focus</button>
          <button className="btn btn-primary"><Spinner/> Подписание…</button>
          <button className="btn btn-primary" disabled>Disabled</button>
        </div>
      </div>
    </div>
  </div>
);

const Row = ({ label, children }) => (
  <div>
    <div className="t-cap muted" style={{ marginBottom: 12 }}>{label}</div>
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>{children}</div>
  </div>
);

const Spinner = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" style={{ animation: 'spin .9s linear infinite' }}>
    <circle cx="8" cy="8" r="6.5" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
    <path d="M8 1.5 a6.5 6.5 0 0 1 6.5 6.5" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// ─── Fields & Forms ───
const ABFields = () => {
  const [v, setV] = React.useState('124580.00');
  const [c, setC] = React.useState('USD');
  return (
    <div className="fx" style={{ width: '100%', height: '100%', padding: 48 }}>
      <div className="t-cap muted">03 · Components</div>
      <div className="t-h1" style={{ marginTop: 6 }}>Поля и формы</div>
      <div className="t-body muted" style={{ marginTop: 10, maxWidth: 560 }}>
        Высота поля 44px — комфортно для длинных номеров счетов и&nbsp;SWIFT-кодов.
        Денежные поля используют моноширинный шрифт.
      </div>

      <div style={{ marginTop: 36, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
        <div className="field">
          <label className="field-label">Наименование организации</label>
          <input className="field-input" defaultValue="ООО Балтсервис"/>
          <span className="field-help">Юр. лицо или ИП</span>
        </div>

        <div className="field">
          <label className="field-label">SWIFT/BIC получателя</label>
          <div className="input-group">
            <span className="ig-prefix"><IcSwift size={16}/></span>
            <input className="field-input fx-mono" defaultValue="DEUTDEFFXXX"/>
            <span className="ig-suffix" style={{ color: 'var(--c-success)' }}><IcCheck size={14}/> найден</span>
          </div>
          <span className="field-help">Deutsche Bank AG, Frankfurt am Main</span>
        </div>

        <div className="field">
          <label className="field-label">Сумма платежа</label>
          <div className="input-group">
            <input className="field-input fx-mono" value={v} onChange={(e) => setV(e.target.value)}/>
            <span className="ig-suffix">
              <select className="fx" style={{ border: 0, background: 'transparent', font: 'inherit', outline: 0, color: 'inherit' }} value={c} onChange={(e) => setC(e.target.value)}>
                <option>USD</option><option>EUR</option><option>CNY</option><option>AED</option>
              </select>
            </span>
          </div>
          <span className="field-help">≈ 11 412 240,00 ₽ по курсу ЦБ</span>
        </div>

        <div className="field has-error">
          <label className="field-label">ИНН плательщика</label>
          <input className="field-input fx-mono" defaultValue="7707083893" style={{ paddingRight: 38, backgroundImage: 'none' }}/>
          <span className="field-error" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><IcAlert size={12}/> Не совпадает с данными ФНС</span>
        </div>

        <div className="field">
          <label className="field-label">Назначение платежа</label>
          <textarea className="field-input" rows="3" style={{ height: 84, padding: 12, resize: 'none', font: '400 14px/1.5 var(--ff-sans)' }} defaultValue="Оплата по контракту № 24-EX/118 от 14.03.2026, поставка металлопроката, инвойс INV-2026-0418."/>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span className="field-help">Опишите цель платежа на английском или русском</span>
            <span className="field-help">142 / 210</span>
          </div>
        </div>

        <div className="field">
          <label className="field-label">Дата валютирования</label>
          <div className="input-group">
            <input className="field-input" defaultValue="27 мая 2026"/>
            <span className="ig-suffix"><IcCal size={16}/></span>
          </div>
          <span className="field-help">T+2 рабочих дня</span>
        </div>
      </div>

      <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 28 }}>
        <Group label="Switch · Toggle">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="switch on"/><span className="t-sm">Уведомления о&nbsp;курсе</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="switch"/><span className="t-sm">Авто-конвертация в&nbsp;USD</span>
          </div>
        </Group>

        <Group label="Checkbox · Radio">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><span className="cbox on"><IcCheck size={12}/></span><span className="t-sm">Согласие на&nbsp;валютный&nbsp;контроль</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><span className="cbox"/><span className="t-sm">Отправить копию на&nbsp;email</span></div>
        </Group>

        <Group label="Segmented control">
          <div className="segmented">
            <div className="seg active">Платежи</div>
            <div className="seg">Конвертация</div>
            <div className="seg">Контракты</div>
          </div>
          <div className="segmented" style={{ marginTop: 8 }}>
            <div className="seg">День</div>
            <div className="seg active">Неделя</div>
            <div className="seg">Месяц</div>
            <div className="seg">Год</div>
          </div>
        </Group>
      </div>
    </div>
  );
};

const Group = ({ label, children }) => (
  <div>
    <div className="t-cap muted" style={{ marginBottom: 14 }}>{label}</div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>{children}</div>
  </div>
);

// ─── Chips, badges, tabs ───
const ABChips = () => (
  <div className="fx" style={{ width: '100%', height: '100%', padding: 48 }}>
    <div className="t-cap muted">03 · Components</div>
    <div className="t-h1" style={{ marginTop: 6 }}>Чипы, статусы, табы</div>
    <div className="t-body muted" style={{ marginTop: 10, maxWidth: 560 }}>
      Цветовая семантика чёткая: зелёный — успех, янтарь — в&nbsp;обработке,
      красный — ошибка, синий — информационное событие.
    </div>

    <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 28 }}>
      <div>
        <div className="t-cap muted" style={{ marginBottom: 12 }}>Статусы платежа</div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <span className="badge success"><span className="dot"/> Зачислено</span>
          <span className="badge warning"><span className="dot"/> В обработке</span>
          <span className="badge info"><span className="dot"/> Подписан</span>
          <span className="badge danger"><span className="dot"/> Отклонён</span>
          <span className="badge"><span className="dot"/> Черновик</span>
          <span className="badge accent">SWIFT GPI</span>
        </div>
      </div>

      <div>
        <div className="t-cap muted" style={{ marginBottom: 12 }}>Чипы — фильтры</div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <span className="chip solid"><IcCheck size={14}/> Все валюты</span>
          <span className="chip">USD <IcX size={12}/></span>
          <span className="chip">EUR <IcX size={12}/></span>
          <span className="chip">CNY <IcX size={12}/></span>
          <span className="chip">Май 2026 <IcX size={12}/></span>
          <span className="chip" style={{ background: 'transparent', color: 'var(--n-500)', border: '1px dashed var(--n-300)' }}><IcPlus size={14}/> Фильтр</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div>
          <div className="t-cap muted" style={{ marginBottom: 12 }}>Табы</div>
          <div className="tabs">
            <div className="tab active">Исходящие</div>
            <div className="tab">Входящие</div>
            <div className="tab">Конвертация</div>
            <div className="tab">Контракты</div>
          </div>
          <div style={{ padding: 20, background: 'var(--n-25)', marginTop: -1, borderRadius: '0 0 12px 12px', color: 'var(--n-500)' }} className="t-sm">
            12 платежей · 4 583 200,00 USD
          </div>
        </div>

        <div>
          <div className="t-cap muted" style={{ marginBottom: 12 }}>Аватары</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className="av">АК</span>
            <span className="av" style={{ background: 'var(--p-200)', color: 'var(--p-800)' }}>МС</span>
            <span className="av" style={{ background: '#f3e2d4', color: '#8a5424' }}>ТП</span>
            <span className="av" style={{ background: '#e0f1e8', color: '#1f6f4d' }}>ИО</span>
            <span className="av" style={{ background: 'var(--n-100)', color: 'var(--n-600)' }}>+4</span>
          </div>

          <div className="t-cap muted" style={{ marginTop: 22, marginBottom: 12 }}>Прогресс</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div className="bar" style={{ flex: 1 }}><i style={{ width: '64%' }}/></div>
            <span className="fx-mono t-xs muted">64%</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 10 }}>
            <div className="bar" style={{ flex: 1 }}><i style={{ width: '22%', background: 'var(--c-warning)' }}/></div>
            <span className="fx-mono t-xs muted">22%</span>
          </div>
        </div>
      </div>

      <div>
        <div className="t-cap muted" style={{ marginBottom: 12 }}>Уведомления</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Toast tone="info" icon={<IcInfo size={18}/>} title="Курс ЦБ обновлён" body="USD/RUB · 91,6240 (+0,18) · 25 мая, 12:00"/>
          <Toast tone="success" icon={<IcCheck size={18}/>} title="Платёж SWIFT №12480 зачислен" body="Beneficiary confirmed · DEUTDEFFXXX · 124&nbsp;580,00 USD"/>
          <Toast tone="danger" icon={<IcAlert size={18}/>} title="Платёж отклонён банком-корреспондентом" body="Reason: incomplete remittance info (field 70)"/>
        </div>
      </div>
    </div>
  </div>
);

const TOAST_BG = { info: 'var(--c-info-bg)', success: 'var(--c-success-bg)', danger: 'var(--c-danger-bg)' };
const TOAST_FG = { info: 'var(--c-info)',    success: 'var(--c-success)',    danger: 'var(--c-danger)' };
const Toast = ({ tone='info', icon, title, body }) => (
  <div style={{ display: 'flex', gap: 12, padding: 14, borderRadius: 12, background: TOAST_BG[tone], border: `1px solid ${TOAST_FG[tone]}25` }}>
    <span style={{ color: TOAST_FG[tone], flex: '0 0 auto', marginTop: 2 }}>{icon}</span>
    <div style={{ flex: 1 }}>
      <div style={{ fontWeight: 600, color: 'var(--n-900)', fontSize: 13 }} dangerouslySetInnerHTML={{__html: title}}/>
      <div className="t-xs muted" style={{ marginTop: 2 }} dangerouslySetInnerHTML={{__html: body}}/>
    </div>
    <button className="btn btn-ghost btn-sm" style={{ height: 28, padding: '0 8px' }}><IcX size={14}/></button>
  </div>
);

// ─── Tables ───
const ROWS = [
  { date: '25.05.2026', ref: 'P-12480', cp: 'Heidelberger Druck AG', cc: 'Германия', amt: '124 580,00', cur: 'USD', stat: 'success', sl: 'Зачислено' },
  { date: '24.05.2026', ref: 'P-12479', cp: 'Sichuan Trading Co.',   cc: 'Китай',     amt: '482 100,00', cur: 'CNY', stat: 'warning', sl: 'В пути' },
  { date: '24.05.2026', ref: 'P-12478', cp: 'Al Mansour Logistics',  cc: 'ОАЭ',       amt: '38 400,00',  cur: 'AED', stat: 'info',    sl: 'Подписан' },
  { date: '23.05.2026', ref: 'P-12477', cp: 'Istanbul Textile Ltd.', cc: 'Турция',    amt: '92 350,00',  cur: 'EUR', stat: 'success', sl: 'Зачислено' },
  { date: '22.05.2026', ref: 'P-12476', cp: 'Mumbai Steelworks',     cc: 'Индия',     amt: '210 000,00', cur: 'USD', stat: 'danger',  sl: 'Отклонён' },
  { date: '21.05.2026', ref: 'P-12475', cp: 'Heidelberger Druck AG', cc: 'Германия',  amt: '54 980,00',  cur: 'EUR', stat: 'success', sl: 'Зачислено' },
];

const ABTable = () => (
  <div className="fx" style={{ width: '100%', height: '100%', padding: 48 }}>
    <div className="t-cap muted">03 · Components · Data</div>
    <div className="t-h1" style={{ marginTop: 6 }}>Таблицы</div>
    <div className="t-body muted" style={{ marginTop: 10, maxWidth: 560 }}>
      Денежные значения — справа, моноширинно. Заголовки — компактные капсы.
      На&nbsp;hover вся строка подсвечивается, и&nbsp;справа появляется меню.
    </div>

    <div style={{ marginTop: 32 }} className="card card-flush">
      <div style={{ padding: 16, display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid var(--n-100)' }}>
        <div className="input-group" style={{ flex: 1, height: 38 }}>
          <span className="ig-prefix" style={{ borderRight: 0 }}><IcSearch size={16}/></span>
          <input className="field-input" placeholder="Поиск по контрагенту, номеру или SWIFT-коду…" style={{ height: 36 }}/>
        </div>
        <button className="btn btn-outline btn-sm"><IcFilter size={14}/> Фильтры · 2</button>
        <button className="btn btn-outline btn-sm"><IcCal size={14}/> Май 2026</button>
        <button className="btn btn-outline btn-sm"><IcDownload size={14}/> Excel</button>
      </div>

      <table className="tbl">
        <thead>
          <tr>
            <th>Дата</th>
            <th>№ платежа</th>
            <th>Контрагент</th>
            <th>Страна</th>
            <th className="num">Сумма</th>
            <th>Статус</th>
            <th style={{ width: 40 }}/>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r) => (
            <tr key={r.ref}>
              <td className="mono" style={{ color: 'var(--n-600)' }}>{r.date}</td>
              <td className="mono" style={{ color: 'var(--accent)', fontWeight: 500 }}>{r.ref}</td>
              <td><div style={{ fontWeight: 500 }}>{r.cp}</div></td>
              <td className="muted">{r.cc}</td>
              <td className="num"><span className="fx-mono" style={{ fontWeight: 500 }}>{r.amt}</span> <span className="muted" style={{ fontSize: 12 }}>{r.cur}</span></td>
              <td><span className={`badge ${r.stat}`}><span className="dot"/> {r.sl}</span></td>
              <td><button className="btn btn-ghost btn-sm" style={{ padding: '0 6px', height: 28 }}><IcMore size={16}/></button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ padding: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--n-100)', color: 'var(--n-500)' }} className="t-sm">
        <span>6 из 124 записей</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <button className="btn btn-ghost btn-sm"><IcArrowLeft size={14}/></button>
          <button className="btn btn-ghost btn-sm" style={{ background: 'var(--accent-bg)', color: 'var(--accent)' }}>1</button>
          <button className="btn btn-ghost btn-sm">2</button>
          <button className="btn btn-ghost btn-sm">3</button>
          <span className="muted" style={{ padding: '0 6px' }}>…</span>
          <button className="btn btn-ghost btn-sm">21</button>
          <button className="btn btn-ghost btn-sm"><IcArrowRight size={14}/></button>
        </div>
      </div>
    </div>
  </div>
);

Object.assign(window, { ABButtons, ABFields, ABChips, ABTable });
