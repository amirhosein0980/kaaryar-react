import './App.css';
import Button from '../Button/Button';

function App() {
  return (
    <div className="main">
      <Button
        variant={Button.VARIANTS.FILLED}
        look={Button.LOOKS.PRIMARY}
        size={Button.SIZES.MEDIUM}
        type="button"
        href={`https://google.com`}
        target={`_blank`}
        onClick={() => console.log('Button clicked!')}
        disabled={false}
        name={`Primary`} />

      <Button
        variant={Button.VARIANTS.FILLED}
        look={Button.LOOKS.SECONDARY}
        size={Button.SIZES.LARGE}
        type="button"
        href={`https://digikala.com`}
        target={`_blank`}
        onClick={() => console.log('Button clicked!')}
        disabled={false}
        name={`Secondary`} />

      <Button
        variant={Button.VARIANTS.FILLED}
        look={Button.LOOKS.SUCCESS}
        size={Button.SIZES.MEDIUM}
        type="button"
        href={`https://divar.ir`}
        target={`_blank`}
        onClick={() => console.log('Button clicked!')}
        disabled={false}
        name={`SUCCESS`} />

      <Button
        variant={Button.VARIANTS.FILLED}
        look={Button.LOOKS.DANGER}
        size={Button.SIZES.MEDIUM}
        type="button"
        href={`https://divar.ir`}
        target={`_blank`}
        onClick={() => console.log('Button clicked!')}
        disabled={false}
        name={`DANGER`} />

      <Button
        variant={Button.VARIANTS.FILLED}
        look={Button.LOOKS.WARNING}
        size={Button.SIZES.MEDIUM}
        type="button"
        href={`https://divar.ir`}
        target={`_blank`}
        onClick={() => console.log('Button clicked!')}
        disabled={false}
        name={`WARNING`} />

      <Button
        variant={Button.VARIANTS.FILLED}
        look={Button.LOOKS.INFO}
        size={Button.SIZES.SMALL}
        type="button"
        href={`https://divar.ir`}
        target={`_blank`}
        onClick={() => console.log('Button clicked!')}
        disabled={true}
        name={`INFO`} />

      <Button
        variant={Button.VARIANTS.FILLED}
        look={Button.LOOKS.DARK}
        size={Button.SIZES.SMALL}
        type="submit"
        onClick={() => console.log('Button clicked!')}
        disabled={true}
        name={`Dark`} />
    </div>
  );
}

export default App;
