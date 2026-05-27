// patterns.jsx — domain patterns: account cards, SWIFT form, charts, states

// ─── Account cards / currency widgets ───
const AccountCard = ({ cur, code, balance, balanceRub, change, accent }) => (
  <div className="card" style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 18 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span className={`flag ${cur.toLowerCase()}`}>{cur === 'RUB' ? '₽' : cur.slice(0,2)}</span>
        <div>
          <div style={{ fontWeight: 600, color: 'var(--n-900)' }}>{code}</div>
          <div className="fx-mono t-xs muted">{cur} · Транзитный счёт</div>
        </div>
      </div>
      <button className="btn btn-ghost btn-sm" style={{ padding: '0 6px', height: 28 }}><IcMore size={16}/></button>
    </div>

    <div>
      <div className="fx-mono" style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--n-900)' }}>{balance}</div>
      <div className="t-sm muted" style={{ marginTop: 4 }}>≈ {balanceRub} ₽ <span style={{ color: change.startsWith('+') ? 'var(--c-success)' : 'var(--c-danger)' }}>{change}</span></div>
    </div>

    <div style={{ display: 'flex', gap: 8 }}>
      <button className="btn btn-secondary btn-sm" style={{ flex: 1 }}><IcSend size={14}/> Перевести</button>
      <button className="btn btn-outline btn-sm" style={{ flex: 1 }}><IcExchange size={14}/> Конвертация</button>
    </div>
  </div>
);

const ABAccounts = () => (
  <div className="fx" style={{ width: '100%', height: '100%', padding: 48 }}>
    <div className="t-cap muted">04 · Patterns</div>
    <div className="t-h1" style={{ marginTop: 6 }}>Карточки счетов</div>
    <div className="t-body muted" style={{ marginTop: 10, maxWidth: 560 }}>
      Транзитный, текущий и&nbsp;специальный валютные счета. Главный
      номинал — крупно, моноширинно. Эквивалент в&nbsp;рублях по&nbsp;курсу ЦБ — рядом.
    </div>

    <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
      <AccountCard cur="USD" code="40702 840 ··· 0042" balance="$ 1 248 530,00" balanceRub="114 376 215,72" change="+0,18%"/>
      <AccountCard cur="EUR" code="40702 978 ··· 0017" balance="€ 482 100,40"   balanceRub="46 188 124,55"  change="+0,42%"/>
      <AccountCard cur="CNY" code="40702 156 ··· 0009" balance="¥ 3 482 100,00" balanceRub="44 178 922,00"  change="-0,11%"/>
    </div>

    <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 }}>
      {/* Big balance hero */}
      <div className="card" style={{ padding: 28, background: 'linear-gradient(135deg, var(--p-800), var(--p-600))', color: '#fff', border: 0, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -60, top: -60, width: 280, height: 280, background: 'radial-gradient(circle, rgba(255,255,255,0.12), transparent 70%)' }}/>
        <div className="t-cap" style={{ color: 'rgba(255,255,255,0.7)' }}>Сводный баланс · все валюты</div>
        <div className="fx-mono" style={{ fontSize: 56, fontWeight: 600, letterSpacing: '-0.025em', marginTop: 14 }}>204 743 262,27 ₽</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 12, color: 'rgba(255,255,255,0.85)' }}>
          <span className="t-sm">+1 824 350,18 ₽ за&nbsp;неделю</span>
          <span style={{ width: 4, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.4)' }}/>
          <span className="t-sm">7 счетов · 4 валюты</span>
        </div>
        <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>
          <button className="btn" style={{ background: '#fff', color: 'var(--p-700)' }}><IcSend size={16}/> Новый платёж</button>
          <button className="btn" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff' }}><IcExchange size={16}/> Конвертация</button>
        </div>
      </div>

      {/* Live exchange rates widget */}
      <div className="card" style={{ padding: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="t-cap muted">Курсы ЦБ</div>
          <span className="t-xs muted">25.05, 12:00</span>
        </div>
        <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            ['USD', '91,6240', '+0,18'],
            ['EUR', '99,4612', '+0,42'],
            ['CNY', '12,6890', '-0,02'],
            ['AED', '24,9510', '+0,07'],
          ].map(([cur, rate, d]) => (
            <div key={cur} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span className={`flag ${cur.toLowerCase()}`} style={{ width: 22, height: 22, fontSize: 10 }}>{cur.slice(0,2)}</span>
              <span className="t-sm" style={{ flex: 1, fontWeight: 500 }}>{cur}/RUB</span>
              <span className="fx-mono" style={{ fontWeight: 500 }}>{rate}</span>
              <span className="fx-mono t-xs" style={{ width: 50, textAlign: 'right', color: d.startsWith('+') ? 'var(--c-success)' : 'var(--c-danger)' }}>{d}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
      {/* Conversion widget */}
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 600, fontSize: 15 }}>Конвертация</div>
          <span className="badge accent">Лучше ЦБ на 0,3%</span>
        </div>
        <div style={{ marginTop: 16, position: 'relative' }}>
          <div style={{ padding: 14, border: '1px solid var(--n-150)', borderRadius: 12, background: 'var(--n-25)' }}>
            <div className="t-xs muted">Списать</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 4 }}>
              <input className="fx-mono fx" style={{ border: 0, outline: 0, background: 'transparent', flex: 1, fontSize: 24, fontWeight: 600, color: 'var(--n-900)' }} defaultValue="10 000 000,00"/>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 10px', background: 'var(--n-0)', borderRadius: 8, border: '1px solid var(--n-200)' }}>
                <span className="flag rub" style={{ width: 20, height: 20, fontSize: 10 }}>₽</span>
                <span style={{ fontWeight: 500 }}>RUB</span>
                <IcChevronDown size={14}/>
              </span>
            </div>
          </div>
          <button style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: 36, height: 36, borderRadius: 10, border: '4px solid var(--n-0)', background: 'var(--n-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--n-700)' }}>
            <IcArrowSwap size={16}/>
          </button>
          <div style={{ padding: 14, border: '1px solid var(--n-150)', borderRadius: 12, background: 'var(--n-0)', marginTop: 6 }}>
            <div className="t-xs muted">Получить</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 4 }}>
              <div className="fx-mono" style={{ flex: 1, fontSize: 24, fontWeight: 600, color: 'var(--n-900)' }}>108 920,15</div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 10px', background: 'var(--accent-bg)', borderRadius: 8 }}>
                <span className="flag usd" style={{ width: 20, height: 20, fontSize: 10 }}>US</span>
                <span style={{ fontWeight: 500, color: 'var(--accent)' }}>USD</span>
                <IcChevronDown size={14}/>
              </span>
            </div>
          </div>
        </div>
        <div className="t-xs muted" style={{ marginTop: 14, display: 'flex', justifyContent: 'space-between' }}>
          <span>Курс 91,8136 · комиссия 0</span>
          <span>Зачисление мгновенно</span>
        </div>
        <button className="btn btn-primary" style={{ width: '100%', marginTop: 14 }}>Купить 108 920,15 USD</button>
      </div>

      {/* Limits & VK summary */}
      <div className="card">
        <div style={{ fontWeight: 600, fontSize: 15 }}>Валютный контроль</div>
        <div className="t-xs muted" style={{ marginTop: 4 }}>Контракт № 24-EX/118 · Heidelberger Druck AG</div>

        <div style={{ marginTop: 18 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }} className="t-sm">
            <span>Сумма контракта</span>
            <span className="fx-mono" style={{ fontWeight: 500 }}>4 500 000,00 USD</span>
          </div>
          <div className="bar" style={{ marginTop: 10 }}><i style={{ width: '64%' }}/></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }} className="t-xs muted">
            <span>Оплачено 2 880 000,00</span><span>Остаток 1 620 000,00</span>
          </div>
        </div>

        <div className="divider" style={{ margin: '18px 0' }}/>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Step done label="Контракт зарегистрирован" meta="14.03.2026"/>
          <Step done label="Получены документы по поставке" meta="08.05.2026"/>
          <Step active label="Подтверждение исполнения" meta="ожидает ответа банка"/>
          <Step label="Закрытие паспорта сделки" meta="прогноз 12.07.2026"/>
        </div>
      </div>
    </div>
  </div>
);

const Step = ({ done, active, label, meta }) => (
  <div className="step-row">
    <div className={`step-dot ${done ? 'done' : ''} ${active ? 'active' : ''}`}/>
    <div style={{ flex: 1 }}>
      <div className="t-sm" style={{ fontWeight: 500, color: 'var(--n-900)' }}>{label}</div>
      <div className="t-xs muted">{meta}</div>
    </div>
  </div>
);

// ─── SWIFT payment form ───
const ABSwiftForm = () => (
  <div className="fx" style={{ width: '100%', height: '100%', padding: 48 }}>
    <div className="t-cap muted">04 · Patterns</div>
    <div className="t-h1" style={{ marginTop: 6 }}>SWIFT-платёж · Экспорт в&nbsp;РФ</div>
    <div className="t-body muted" style={{ marginTop: 10, maxWidth: 560 }}>
      Полная форма международного перевода. Шаги: реквизиты → проверка
      санкций/AML → подпись → отправка в&nbsp;SWIFT-сеть.
    </div>

    <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '2.2fr 1fr', gap: 24 }}>
      {/* Left — form */}
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        {/* Step bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 0, padding: 18, borderBottom: '1px solid var(--n-100)' }}>
          {[
            ['Реквизиты', true, true],
            ['Сумма и&nbsp;комиссия', true, true],
            ['Документы', false, true],
            ['Подпись', false, false],
          ].map(([label, active, done], i, arr) => (
            <React.Fragment key={label}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{
                  width: 24, height: 24, borderRadius: '50%',
                  background: done ? 'var(--c-success)' : (active ? 'var(--accent)' : 'var(--n-100)'),
                  color: done || active ? '#fff' : 'var(--n-500)',
                  fontSize: 12, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>{done ? <IcCheck size={14}/> : i + 1}</span>
                <span className="t-sm" style={{ fontWeight: active ? 600 : 400, color: active ? 'var(--n-900)' : 'var(--n-500)' }} dangerouslySetInnerHTML={{__html: label}}/>
              </div>
              {i < arr.length - 1 && <div style={{ flex: 1, height: 1, background: done ? 'var(--c-success)' : 'var(--n-150)', margin: '0 14px' }}/>}
            </React.Fragment>
          ))}
        </div>

        <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div>
            <div className="t-cap muted" style={{ marginBottom: 12 }}>Бенефициар</div>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14 }}>
              <div className="field">
                <label className="field-label">Наименование (как в&nbsp;уставных документах)</label>
                <input className="field-input" defaultValue="Heidelberger Druckmaschinen AG"/>
              </div>
              <div className="field">
                <label className="field-label">Страна</label>
                <div className="input-group"><input className="field-input" defaultValue="Германия"/><span className="ig-suffix"><IcChevronDown size={14}/></span></div>
              </div>
              <div className="field" style={{ gridColumn: '1 / -1' }}>
                <label className="field-label">Адрес</label>
                <input className="field-input" defaultValue="Kurfürsten-Anlage 52–60, 69115 Heidelberg, Germany"/>
              </div>
              <div className="field">
                <label className="field-label">IBAN получателя</label>
                <input className="field-input fx-mono" defaultValue="DE89 3704 0044 0532 0130 00"/>
              </div>
              <div className="field">
                <label className="field-label">SWIFT/BIC</label>
                <div className="input-group">
                  <span className="ig-prefix"><IcSwift size={16}/></span>
                  <input className="field-input fx-mono" defaultValue="COBADEFFXXX"/>
                  <span className="ig-suffix" style={{ color: 'var(--c-success)' }}><IcCheck size={14}/></span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="t-cap muted" style={{ marginBottom: 12 }}>Сумма и валюта</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 14 }}>
              <div className="field">
                <label className="field-label">Сумма к&nbsp;отправке</label>
                <div className="input-group">
                  <input className="field-input fx-mono" defaultValue="124 580.00"/>
                  <span className="ig-suffix"><span className="flag eur" style={{ width: 18, height: 18, fontSize: 9 }}>EU</span><span style={{ marginLeft: 6 }}>EUR</span></span>
                </div>
              </div>
              <div className="field">
                <label className="field-label">Списать со&nbsp;счёта</label>
                <div className="input-group"><input className="field-input fx-mono t-sm" defaultValue="40702 978 ··· 0017"/><span className="ig-suffix"><IcChevronDown size={14}/></span></div>
              </div>
              <div className="field">
                <label className="field-label">Расходы по&nbsp;переводу</label>
                <div className="segmented" style={{ width: '100%', height: 44, padding: 4 }}>
                  <div className="seg active" style={{ flex: 1, textAlign: 'center', lineHeight: '32px' }}>OUR</div>
                  <div className="seg" style={{ flex: 1, textAlign: 'center', lineHeight: '32px' }}>SHA</div>
                  <div className="seg" style={{ flex: 1, textAlign: 'center', lineHeight: '32px' }}>BEN</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="t-cap muted" style={{ marginBottom: 12 }}>Назначение (field 70)</div>
            <textarea className="field-input" style={{ height: 86, padding: 12, resize: 'none', font: '400 14px/1.55 var(--ff-sans)' }} defaultValue="Payment for contract No. 24-EX/118 dd 14.03.2026, supply of metal-pressing equipment, invoice INV-2026-0418 dd 18.04.2026."/>
            <div style={{ display: 'flex', justifyContent: 'space-between' }} className="t-xs muted">
              <span>Только латиница, цифры и&nbsp;стандартные символы</span><span>148 / 140 × 4</span>
            </div>
          </div>

          <div className="divider"/>

          {/* AML check */}
          <div style={{ padding: 16, background: 'var(--c-success-bg)', borderRadius: 12, display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <span style={{ color: 'var(--c-success)', marginTop: 2 }}><IcShield size={20}/></span>
            <div>
              <div style={{ fontWeight: 600, color: 'var(--n-900)' }}>Санкционные и&nbsp;AML-проверки пройдены</div>
              <div className="t-sm muted" style={{ marginTop: 4 }}>Контрагент, банк и&nbsp;корреспондент не&nbsp;в&nbsp;стоп-листах. Маршрут — через COBA&nbsp;DE&nbsp;FF&nbsp;→&nbsp;DEUT&nbsp;DE&nbsp;FF.</div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button className="btn btn-ghost"><IcArrowLeft size={16}/> Назад</button>
            <div style={{ display: 'flex', gap: 10 }}>
              <button className="btn btn-outline">Сохранить как черновик</button>
              <button className="btn btn-primary">Перейти к&nbsp;подписи <IcArrowRight size={16}/></button>
            </div>
          </div>
        </div>
      </div>

      {/* Right summary */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div className="card">
          <div className="t-cap muted">Сводка</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 14 }}>
            <KV k="Сумма" v="€ 124 580,00"/>
            <KV k="Эквивалент" v="12 386 240,15 ₽"/>
            <KV k="Комиссия банка" v="35 EUR · OUR"/>
            <KV k="Курс конвертации" v="99,4612"/>
            <KV k="Дата валютирования" v="27.05.2026 · T+2"/>
            <div className="divider"/>
            <KV k="Итого к&nbsp;списанию" v="€ 124 615,00" big/>
          </div>
        </div>

        <div className="card" style={{ background: 'var(--accent-bg)', borderColor: 'transparent' }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <span style={{ color: 'var(--accent)' }}><IcInfo size={20}/></span>
            <div>
              <div style={{ fontWeight: 600, color: 'var(--n-900)' }}>Документы под&nbsp;контракт</div>
              <div className="t-sm muted" style={{ marginTop: 4 }}>Для платежей &gt;&nbsp;6&nbsp;млн&nbsp;₽ загрузите инвойс и&nbsp;ГТД до&nbsp;15:00 МСК.</div>
              <button className="btn btn-secondary btn-sm" style={{ marginTop: 12 }}><IcUpload size={14}/> Прикрепить документы</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const KV = ({ k, v, big }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
    <span className="t-sm muted" dangerouslySetInnerHTML={{__html: k}}/>
    <span className={big ? 'fx-mono' : 'fx-mono t-sm'} style={{ fontWeight: big ? 700 : 500, color: 'var(--n-900)', fontSize: big ? 18 : undefined }}>{v}</span>
  </div>
);

Object.assign(window, { ABAccounts, ABSwiftForm, AccountCard, KV, Step });
