// app.jsx — composition of all artboards on the canvas + Tweaks

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "navy",
  "density": "regular",
  "showLabels": true
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply palette token to body so all artboards re-skin together
  React.useEffect(() => {
    document.documentElement.dataset.palette = t.palette;
  }, [t.palette]);

  return (
    <>
      <DesignCanvas>
        <DCSection id="brand" title="01 · Brand" subtitle="Обложка, логотип, голос системы">
          <DCArtboard id="cover" label="Cover" width={1280} height={720}>
            <ABCover/>
          </DCArtboard>
        </DCSection>

        <DCSection id="foundations" title="02 · Foundations" subtitle="Цвет · Типографика · Сетка · Иконки">
          <DCArtboard id="palette" label="Палитра" width={1100} height={920}>
            <ABPalette/>
          </DCArtboard>
          <DCArtboard id="typography" label="Типографика" width={1100} height={1100}>
            <ABTypography/>
          </DCArtboard>
          <DCArtboard id="spacing" label="Сетка и&nbsp;отступы" width={1100} height={780}>
            <ABSpacing/>
          </DCArtboard>
          <DCArtboard id="icons" label="Иконки" width={1100} height={980}>
            <ABIcons/>
          </DCArtboard>
        </DCSection>

        <DCSection id="components" title="03 · Components" subtitle="Базовые элементы интерфейса">
          <DCArtboard id="buttons" label="Кнопки" width={1100} height={780}>
            <ABButtons/>
          </DCArtboard>
          <DCArtboard id="fields" label="Поля и&nbsp;формы" width={1100} height={920}>
            <ABFields/>
          </DCArtboard>
          <DCArtboard id="chips" label="Чипы, статусы, табы" width={1100} height={840}>
            <ABChips/>
          </DCArtboard>
          <DCArtboard id="table" label="Таблицы" width={1280} height={780}>
            <ABTable/>
          </DCArtboard>
        </DCSection>

        <DCSection id="patterns" title="04 · Patterns" subtitle="Доменные паттерны — счета, SWIFT-форма, аналитика">
          <DCArtboard id="accounts" label="Карточки счетов и&nbsp;валютные виджеты" width={1280} height={1080}>
            <ABAccounts/>
          </DCArtboard>
          <DCArtboard id="swift-form" label="SWIFT-платёж" width={1440} height={1180}>
            <ABSwiftForm/>
          </DCArtboard>
          <DCArtboard id="charts" label="Графики и&nbsp;аналитика" width={1280} height={1080}>
            <ABCharts/>
          </DCArtboard>
        </DCSection>

        <DCSection id="states" title="05 · States" subtitle="Пусто, загрузка, ошибка, успех">
          <DCArtboard id="states" label="Состояния" width={1100} height={780}>
            <ABStates/>
          </DCArtboard>
        </DCSection>

        <DCSection id="showcase" title="06 · Showcase" subtitle="Готовые экраны — веб и&nbsp;мобайл">
          <DCArtboard id="desktop" label="Desktop · Главная" width={1440} height={960}>
            <ABDesktop/>
          </DCArtboard>
          <DCArtboard id="mobile" label="Mobile · 3 экрана" width={1280} height={920}>
            <ABMobile/>
          </DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel>
        <TweakSection label="Палитра"/>
        <TweakRadio
          label="Направление"
          value={t.palette}
          options={[
            { value: 'navy',     label: 'Navy' },
            { value: 'cobalt',   label: 'Cobalt' },
            { value: 'midnight', label: 'Midnight' },
          ]}
          onChange={(v) => setTweak('palette', v)}
        />
        <PaletteHint palette={t.palette}/>
        <TweakSection label="Подсказки"/>
        <TweakToggle label="Поясняющие подписи" value={t.showLabels} onChange={(v) => setTweak('showLabels', v)}/>
      </TweaksPanel>
    </>
  );
}

const PALETTE_HINTS = {
  navy:     { name: 'Navy · #1F54A8',  d: 'Классический банковский. Строго, корпоративно, читается как «надёжно».' },
  cobalt:   { name: 'Cobalt · #2150E0',d: 'Более тех. Чуть ярче, ближе к Modulbank/Тинькофф. Молодой бизнес.' },
  midnight: { name: 'Midnight · #3A45B5',d: 'Индиго + холодный циан в&nbsp;инфо. Премиум, тёмная глубина.' },
};

function PaletteHint({ palette }) {
  const h = PALETTE_HINTS[palette] || PALETTE_HINTS.navy;
  return (
    <div style={{ padding: 10, borderRadius: 8, background: 'rgba(0,0,0,0.04)', border: '.5px solid rgba(0,0,0,0.06)' }}>
      <div style={{ fontWeight: 600, fontSize: 11, color: '#29261b' }}>{h.name}</div>
      <div style={{ fontSize: 11, color: 'rgba(41,38,27,0.6)', marginTop: 4, lineHeight: 1.4 }} dangerouslySetInnerHTML={{ __html: h.d }}/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
