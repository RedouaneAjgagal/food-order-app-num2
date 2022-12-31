import style from './Main.module.css';
import Products from './Products';
import Wrapper from '../UI/Wrapper';
const Main = () => {
    return (
        <main className={style.Main}>
            <Wrapper className={style.Main__Wrapper}>
                <Products />
            </Wrapper>
        </main>
    )
}
export default Main;