
import './Header.css';

export function Header(){
    return (
        <div className="Header">
            <div className="container">
                <div>
                    <a href="/">LOGO</a>
                </div>
                <div>
                    <a href="">DECKS</a>
                </div>
                <div>
                    <a href="/login">LOGIN</a>
                </div>
            </div>
        </div>
    );
}
