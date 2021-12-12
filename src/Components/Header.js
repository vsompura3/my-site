import Nav from "./Nav"

export default function Header() {
  return (
    <header className="header">
      <Nav/>
      <div className="hero">
        <img src="https://avatars.githubusercontent.com/u/42895093?v=4" alt="Vaibhav Sompura" />
        <div className="textbox">
          <h1>Vaibhav Sompura</h1>
        </div>
      </div>
    </header>
  )
}
