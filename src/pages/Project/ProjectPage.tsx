import { website, programm, game, tehno } from '../../orders'
import { useLocation } from 'react-router-dom'
import { Categories } from '../../components/Categories/Categories'
import './ProjectPage.css'

/** Страница со списком товаров. */
export const ProjectPage = () => {
    /** Получаем hash из строки браузера. */
    const { hash } = useLocation()

    return (
        <>
        <div className='project'>
            <h1>MY PROJECTS</h1>
            {hash !== '' ? (
                <>
                    {hash === '#website' && <Categories categoryName={'WEBSITE'} ordersArray={website} />}
                    {hash === '#programm' && <Categories categoryName={'PROGRAMM'} ordersArray={programm} />}
                    {hash === '#game' && <Categories categoryName={'GAME'} ordersArray={game} />}
                    {hash === '#tehno' && <Categories categoryName={'TEHNO'} ordersArray={tehno} />}
                </>
            ) : (
                <>
                    <Categories categoryName={'WEBSITE'} ordersArray={website} />
                    <Categories categoryName={'PROGRAMM'} ordersArray={programm} />
                    <Categories categoryName={'GAME'} ordersArray={game} />
                    <Categories categoryName={'TEHNO'} ordersArray={tehno} />
                </>
            )}
            </div>
        </>
    );
};