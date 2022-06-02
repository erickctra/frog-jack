import Card from './components/card';
import Computer from './components/computer';
import HitButton from './components/hitButton';
import StandButton from './components/standButton';
import globalStyles from './globalStyles';

globalStyles();

function App() {
  return (
    <div className="container">
      <div className="flex">
        <Computer></Computer>
        <div className="balloon"></div>
      </div>
      <div className="deck">
        <Card></Card>
        <Card></Card>
      </div>
      <div className="deck">
        <Card></Card>
        <Card></Card>
      </div>
      <div className="flex">
        <HitButton></HitButton>
        <StandButton></StandButton>
      </div>
    </div>
  );
}

export default App;
