// showcase.jsx — Full product surfaces (desktop + mobile)

// ─── Desktop dashboard ───
const ABDesktop = () => (
  <div className="fx" style={{ width: '100%', height: '100%', background: 'var(--n-25)', display: 'flex', overflow: 'hidden' }}>
    {/* Sidebar */}
    <aside style={{ width: 240, background: 'var(--n-0)', borderRight: '1px solid var(--n-100)', display: 'flex', flexDirection: 'column', padding: 20 }}>
      <Logo size={28}/>
      <button className="btn btn-primary" style={{ marginTop: 24, justifyContent: 'center' }}><IcPlus size={16}/> Новый платёж</button>

      <nav style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {[
          ['Главная',         IcGrid,    false],
          ['Платежи',         IcSend,    true],
          ['Конвертация',     IcExchange,false],
          ['Контракты',       IcDoc,     false],
          ['Контрагенты',     IcUsers,   false],
          ['Валютный контроль', IcShield, false],
          ['Аналитика',       IcChart,   false],
        ].map(([l, Ic, active]) => (
          <a key={l} href="#" style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '10px 12px', borderRadius: 10, textDecoration: 'none',
            background: active ? 'var(--accent-bg)' : 'transparent',
            color: active ? 'var(--accent)' : 'var(--n-700)',
            fontSize: 14, fontWeight: active ? 600 : 500,
          }}>
            <Ic size={18}/>{l}
            {l === 'Платежи' && <span style={{ marginLeft: 'auto', background: 'var(--accent)', color: '#fff', borderRadius: 999, padding: '1px 7px', fontSize: 11 }}>4</span>}
          </a>
        ))}
      </nav>

      <div className="divider" style={{ margin: '24px 0 14px' }}/>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {[['Документы', IcInvoice], ['Уведомления', IcBell], ['Настройки', IcSettings]].map(([l, Ic]) => (
          <a key={l} href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 10, textDecoration: 'none', color: 'var(--n-600)', fontSize: 14 }}>
            <Ic size={18}/>{l}
          </a>
        ))}
      </nav>

      <div style={{ marginTop: 'auto', padding: 12, background: 'var(--n-25)', border: '1px solid var(--n-100)', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
        <span className="av">АК</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="t-sm" style={{ fontWeight: 600 }}>Анна Котова</div>
          <div className="t-xs muted" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>ООО «Балтсервис»</div>
        </div>
        <IcChevronDown size={14} style={{ color: 'var(--n-400)' }}/>
      </div>
    </aside>

    {/* Main */}
    <main style={{ flex: 1, overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
      {/* Topbar */}
      <header style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 32px', background: 'var(--n-0)', borderBottom: '1px solid var(--n-100)' }}>
        <div className="input-group" style={{ flex: 1, height: 38, maxWidth: 420 }}>
          <span className="ig-prefix" style={{ borderRight: 0 }}><IcSearch size={16}/></span>
          <input className="field-input" placeholder="Поиск платежей, контрагентов, SWIFT…" style={{ height: 36 }}/>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }} className="t-sm muted">
            <span style={{ width: 6, height: 6, borderRadius: 3, background: 'var(--c-success)' }}/>
            SWIFT · доступно
          </div>
          <button className="btn btn-ghost btn-sm" style={{ padding: '0 8px' }}><IcBell size={18}/></button>
          <button className="btn btn-ghost btn-sm" style={{ padding: '0 8px' }}><IcSettings size={18}/></button>
        </div>
      </header>

      {/* Content */}
      <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div>
            <div className="t-cap muted">Главная · 25 мая 2026, 12:08</div>
            <div className="t-h2" style={{ marginTop: 6 }}>Добрый день, Анна</div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button className="btn btn-outline btn-sm"><IcDownload size={14}/> Выгрузка</button>
            <button className="btn btn-outline btn-sm"><IcCal size={14}/> Май 2026</button>
          </div>
        </div>

        {/* Hero balance + rates */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 }}>
          <div className="card" style={{ padding: 28, background: 'linear-gradient(135deg, var(--p-800), var(--p-600))', color: '#fff', border: 0, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', right: -60, top: -60, width: 280, height: 280, background: 'radial-gradient(circle, rgba(255,255,255,0.12), transparent 70%)' }}/>
            <div className="t-cap" style={{ color: 'rgba(255,255,255,0.7)' }}>Сводный баланс · ₽</div>
            <div className="fx-mono" style={{ fontSize: 48, fontWeight: 600, letterSpacing: '-0.025em', marginTop: 14 }}>204 743 262,27</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 12, color: 'rgba(255,255,255,0.85)' }}>
              <span className="t-sm">+1 824 350,18 за&nbsp;неделю</span>
              <span style={{ width: 4, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.4)' }}/>
              <span className="t-sm">7 счетов · 4 валюты</span>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>
              <button className="btn" style={{ background: '#fff', color: 'var(--p-700)' }}><IcSend size={16}/> Новый платёж</button>
              <button className="btn" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff' }}><IcExchange size={16}/> Конвертация</button>
            </div>
          </div>

          <div className="card" style={{ padding: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="t-cap muted">Курсы ЦБ</div>
              <span className="t-xs muted">25.05, 12:00</span>
            </div>
            <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                ['USD', '91,6240', '+0,18'],
                ['EUR', '99,4612', '+0,42'],
                ['CNY', '12,6890', '-0,02'],
                ['AED', '24,9510', '+0,07'],
              ].map(([cur, rate, d]) => (
                <div key={cur} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span className={`flag ${cur.toLowerCase()}`} style={{ width: 22, height: 22, fontSize: 10 }}>{cur.slice(0,2)}</span>
                  <span className="t-sm" style={{ flex: 1, fontWeight: 500 }}>{cur}/RUB</span>
                  <span className="fx-mono t-sm" style={{ fontWeight: 500 }}>{rate}</span>
                  <span className="fx-mono t-xs" style={{ width: 46, textAlign: 'right', color: d.startsWith('+') ? 'var(--c-success)' : 'var(--c-danger)' }}>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Account cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          <AccountCard cur="USD" code="40702 840 ··· 0042" balance="$ 1 248 530,00" balanceRub="114 376 215,72" change="+0,18%"/>
          <AccountCard cur="EUR" code="40702 978 ··· 0017" balance="€ 482 100,40"   balanceRub="46 188 124,55"  change="+0,42%"/>
          <AccountCard cur="CNY" code="40702 156 ··· 0009" balance="¥ 3 482 100,00" balanceRub="44 178 922,00"  change="-0,11%"/>
        </div>

        {/* Recent payments table */}
        <div className="card card-flush">
          <div style={{ padding: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--n-100)' }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 600 }}>Последние SWIFT-платежи</div>
              <div className="t-xs muted" style={{ marginTop: 2 }}>За последние 7 дней · 12 переводов</div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn btn-outline btn-sm"><IcFilter size={14}/> Фильтры</button>
              <button className="btn btn-ghost btn-sm">Все платежи <IcChevronRight size={14}/></button>
            </div>
          </div>
          <table className="tbl">
            <thead>
              <tr>
                <th>Дата</th><th>№</th><th>Контрагент</th><th>Страна</th>
                <th className="num">Сумма</th><th>Статус</th><th style={{width:36}}/>
              </tr>
            </thead>
            <tbody>
              {[
                { d: '25.05', n: 'P-12480', cp: 'Heidelberger Druck AG', cc: 'Германия', a: '124 580,00', c: 'USD', s: 'success', sl: 'Зачислено' },
                { d: '24.05', n: 'P-12479', cp: 'Sichuan Trading Co.',   cc: 'Китай',    a: '482 100,00', c: 'CNY', s: 'warning', sl: 'В пути' },
                { d: '24.05', n: 'P-12478', cp: 'Al Mansour Logistics',  cc: 'ОАЭ',      a: '38 400,00',  c: 'AED', s: 'info',    sl: 'Подписан' },
                { d: '23.05', n: 'P-12477', cp: 'Istanbul Textile Ltd.', cc: 'Турция',   a: '92 350,00',  c: 'EUR', s: 'success', sl: 'Зачислено' },
              ].map((r) => (
                <tr key={r.n}>
                  <td className="mono" style={{ color: 'var(--n-600)' }}>{r.d}</td>
                  <td className="mono" style={{ color: 'var(--accent)', fontWeight: 500 }}>{r.n}</td>
                  <td style={{ fontWeight: 500 }}>{r.cp}</td>
                  <td className="muted">{r.cc}</td>
                  <td className="num"><span className="fx-mono" style={{ fontWeight: 500 }}>{r.a}</span> <span className="muted" style={{ fontSize: 12 }}>{r.c}</span></td>
                  <td><span className={`badge ${r.s}`}><span className="dot"/>{r.sl}</span></td>
                  <td><IcChevronRight size={16} style={{ color: 'var(--n-400)' }}/></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
);

// ─── Mobile screens ───
const Phone = ({ children, label }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
    <div style={{
      width: 360, height: 720, borderRadius: 44,
      background: '#0a0e18',
      padding: 10,
      boxShadow: '0 24px 60px -12px rgba(15,22,35,0.35), 0 2px 6px rgba(15,22,35,0.1)',
    }}>
      <div style={{ width: '100%', height: '100%', borderRadius: 36, overflow: 'hidden', background: '#fff', position: 'relative' }}>
        {/* Status bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 26px', fontSize: 13, fontWeight: 600, color: 'var(--n-900)', fontFamily: 'var(--ff-sans)', zIndex: 10 }}>
          <span>9:41</span>
          <div style={{ position: 'absolute', left: '50%', top: 6, transform: 'translateX(-50%)', width: 100, height: 24, borderRadius: 14, background: '#0a0e18' }}/>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <svg width="16" height="10" viewBox="0 0 16 10"><rect x="1" y="3" width="2" height="4" fill="currentColor"/><rect x="5" y="2" width="2" height="6" fill="currentColor"/><rect x="9" y="1" width="2" height="8" fill="currentColor"/><rect x="13" y="0" width="2" height="10" fill="currentColor"/></svg>
            <svg width="22" height="11" viewBox="0 0 22 11"><rect x="0.5" y="0.5" width="19" height="10" rx="2.5" fill="none" stroke="currentColor"/><rect x="2" y="2" width="15" height="7" rx="1" fill="currentColor"/><rect x="20" y="3.5" width="1.5" height="4" rx="0.5" fill="currentColor"/></svg>
          </span>
        </div>
        <div style={{ width: '100%', height: '100%', paddingTop: 44, overflow: 'hidden' }}>
          {children}
        </div>
      </div>
    </div>
    <div className="t-cap muted" style={{ fontFamily: 'var(--ff-sans)' }}>{label}</div>
  </div>
);

const ABMobile = () => (
  <div className="fx" style={{ width: '100%', height: '100%', padding: 48, background: 'var(--n-25)' }}>
    <div className="t-cap muted">06 · Showcase</div>
    <div className="t-h1" style={{ marginTop: 6 }}>Мобильное приложение</div>
    <div className="t-body muted" style={{ marginTop: 10, maxWidth: 560 }}>
      Главный, новый SWIFT-платёж, статус GPI. Те&nbsp;же компоненты,
      адаптированные под&nbsp;узкий экран — карточки счетов
      становятся прокручиваемыми по&nbsp;горизонтали.
    </div>

    <div style={{ marginTop: 40, display: 'flex', gap: 40, justifyContent: 'center' }}>
      <Phone label="Главная">
        <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 16, fontFamily: 'var(--ff-sans)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="av">АК</span>
            <div style={{ flex: 1 }}>
              <div className="t-xs muted">ООО «Балтсервис»</div>
              <div style={{ fontWeight: 600, fontSize: 15 }}>Анна Котова</div>
            </div>
            <IcBell size={20} style={{ color: 'var(--n-600)' }}/>
          </div>

          <div className="card" style={{ padding: 16, background: 'linear-gradient(135deg, var(--p-800), var(--p-600))', color: '#fff', border: 0 }}>
            <div className="t-cap" style={{ color: 'rgba(255,255,255,0.7)' }}>Баланс · все валюты</div>
            <div className="fx-mono" style={{ fontSize: 28, fontWeight: 600, marginTop: 6, letterSpacing: '-0.02em' }}>204 743 262 ₽</div>
            <div style={{ display: 'flex', gap: 6, marginTop: 12 }}>
              <button className="btn btn-sm" style={{ flex: 1, background: '#fff', color: 'var(--p-700)', justifyContent: 'center' }}><IcSend size={14}/> Платёж</button>
              <button className="btn btn-sm" style={{ flex: 1, background: 'rgba(255,255,255,0.12)', color: '#fff', justifyContent: 'center' }}><IcExchange size={14}/> Обмен</button>
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="t-cap muted">Счета</div>
              <span className="t-xs" style={{ color: 'var(--accent)' }}>Все →</span>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 10, overflowX: 'auto', paddingRight: 18, marginRight: -18 }}>
              {[['USD','$ 1 248 530'], ['EUR','€ 482 100'], ['CNY','¥ 3 482 100']].map(([c,b]) => (
                <div key={c} className="card" style={{ padding: 14, minWidth: 160, flex: '0 0 auto' }}>
                  <span className={`flag ${c.toLowerCase()}`} style={{ width: 24, height: 24, fontSize: 11 }}>{c.slice(0,2)}</span>
                  <div className="t-xs muted" style={{ marginTop: 8 }}>{c} · текущий</div>
                  <div className="fx-mono" style={{ fontWeight: 600, marginTop: 4 }}>{b}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="t-cap muted" style={{ marginBottom: 8 }}>Последние операции</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[
                ['Heidelberger Druck AG', 'SWIFT · 25.05', '-$ 124 580', 'success'],
                ['Sichuan Trading Co.',  'SWIFT · 24.05', '-¥ 482 100', 'warning'],
                ['Курс USD/RUB',          'Конвертация',   '+$ 108 920',  'info'],
              ].map(([cp, m, a, s], i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1px solid var(--n-100)' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--accent-bg)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IcSwift size={18}/>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 500, fontSize: 13, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{cp}</div>
                    <div className="t-xs muted">{m}</div>
                  </div>
                  <span className="fx-mono t-sm" style={{ fontWeight: 500 }}>{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* tab bar */}
        <MobileTabBar active="home"/>
      </Phone>

      <Phone label="Новый SWIFT-платёж">
        <div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 16, fontFamily: 'var(--ff-sans)', height: 'calc(100% - 44px)', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button className="btn btn-ghost btn-sm" style={{ padding: '0 6px', height: 30 }}><IcArrowLeft size={18}/></button>
            <div style={{ fontWeight: 600, flex: 1 }}>Новый платёж</div>
            <span className="badge accent">SWIFT</span>
          </div>

          <div>
            <div className="t-cap muted">Списать со счёта</div>
            <div className="card" style={{ padding: 14, marginTop: 8, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span className="flag eur" style={{ width: 28, height: 28, fontSize: 11 }}>EU</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500, fontSize: 13 }}>EUR · текущий</div>
                <div className="fx-mono t-xs muted">40702 978 ··· 0017</div>
              </div>
              <span className="fx-mono t-sm" style={{ fontWeight: 500 }}>€ 482 100,40</span>
            </div>
          </div>

          <div>
            <div className="t-cap muted">Сумма</div>
            <div className="card" style={{ padding: '16px 18px', marginTop: 8 }}>
              <div className="fx-mono" style={{ fontSize: 32, fontWeight: 600, letterSpacing: '-0.02em' }}>€ 124 580,00</div>
              <div className="t-xs muted" style={{ marginTop: 4 }}>≈ 12 386 240,15 ₽ · комиссия 35 EUR</div>
            </div>
          </div>

          <div className="field" style={{ gap: 6 }}>
            <span className="t-cap muted">Получатель</span>
            <div className="card" style={{ padding: '12px 14px' }}>
              <div style={{ fontWeight: 500, fontSize: 13 }}>Heidelberger Druckmaschinen AG</div>
              <div className="fx-mono t-xs muted" style={{ marginTop: 4 }}>DE89 3704 0044 0532 0130 00</div>
              <div className="fx-mono t-xs muted" style={{ marginTop: 2 }}>COBADEFFXXX · Германия</div>
            </div>
          </div>

          <div className="field" style={{ gap: 6 }}>
            <span className="t-cap muted">Назначение</span>
            <div className="card" style={{ padding: '12px 14px' }}>
              <div className="t-sm">Payment for contract No. 24-EX/118, supply of metal-pressing equipment, invoice INV-2026-0418</div>
            </div>
          </div>

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ padding: '10px 14px', background: 'var(--c-success-bg)', borderRadius: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
              <IcShield size={18} style={{ color: 'var(--c-success)' }}/>
              <span className="t-xs" style={{ color: 'var(--n-900)', fontWeight: 500 }}>Санкционные проверки пройдены</span>
            </div>
            <button className="btn btn-primary btn-lg" style={{ justifyContent: 'center' }}>Подписать и&nbsp;отправить</button>
          </div>
        </div>
      </Phone>

      <Phone label="Отслеживание GPI">
        <div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 16, fontFamily: 'var(--ff-sans)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button className="btn btn-ghost btn-sm" style={{ padding: '0 6px', height: 30 }}><IcArrowLeft size={18}/></button>
            <div style={{ fontWeight: 600, flex: 1 }}>Платёж P-12480</div>
            <IcMore size={18} style={{ color: 'var(--n-600)' }}/>
          </div>

          <div className="card" style={{ padding: 16, textAlign: 'center', background: 'var(--c-success-bg)', border: 0 }}>
            <span style={{ display: 'inline-flex', width: 44, height: 44, borderRadius: '50%', background: 'var(--c-success)', color: '#fff', alignItems: 'center', justifyContent: 'center' }}><IcCheck size={22}/></span>
            <div style={{ fontWeight: 600, marginTop: 10 }}>Зачислено бенефициару</div>
            <div className="t-xs muted" style={{ marginTop: 4 }}>25.05.2026 в&nbsp;11:42 МСК</div>
            <div className="fx-mono" style={{ fontSize: 22, fontWeight: 600, marginTop: 14 }}>€ 124 580,00</div>
            <div className="t-xs muted" style={{ marginTop: 2 }}>≈ 12 386 240,15 ₽</div>
          </div>

          <div>
            <div className="t-cap muted" style={{ marginBottom: 12 }}>SWIFT GPI · маршрут</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <Step done label="Платёж отправлен" meta="ВАШ БАНК · 24.05, 09:14"/>
              <Step done label="Банк-корреспондент принял" meta="DEUTDEFFXXX · 24.05, 14:08"/>
              <Step done label="Конверсия RUB → EUR" meta="курс 99,4612 · -35 EUR"/>
              <Step done label="Доставлено в банк бенефициара" meta="COBADEFFXXX · 25.05, 10:30"/>
              <Step active label="Зачислено на счёт получателя" meta="25.05, 11:42 · подтверждено"/>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn btn-outline btn-sm" style={{ flex: 1, justifyContent: 'center' }}><IcDownload size={14}/> ПП</button>
            <button className="btn btn-outline btn-sm" style={{ flex: 1, justifyContent: 'center' }}><IcDoc size={14}/> MT103</button>
          </div>
        </div>
      </Phone>
    </div>
  </div>
);

const MobileTabBar = ({ active }) => (
  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, paddingBottom: 14, background: 'var(--n-0)', borderTop: '1px solid var(--n-100)', display: 'flex', justifyContent: 'space-around', padding: '8px 0 18px' }}>
    {[['home', IcGrid, 'Главная'], ['pay', IcSend, 'Платежи'], ['ex', IcExchange, 'Обмен'], ['doc', IcDoc, 'Документы'], ['me', IcUser, 'Профиль']].map(([id, Ic, l]) => (
      <div key={id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, color: active === id ? 'var(--accent)' : 'var(--n-500)' }}>
        <Ic size={20}/>
        <span style={{ fontSize: 10, fontWeight: active === id ? 600 : 400 }}>{l}</span>
      </div>
    ))}
  </div>
);

Object.assign(window, { ABDesktop, ABMobile, Phone, MobileTabBar });
