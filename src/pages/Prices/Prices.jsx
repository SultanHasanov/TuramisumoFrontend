import React from 'react'
import Header from '../../Components/Header/Header'
import styles from '../../scss/pages/Prices.module.scss'

const Prices = () => {
  return (
    <div className={styles.main}>
        <Header />
        <div className={styles.pricesTitle}>
            <h1>
                ЦЕНЫ
                <span style={{ color: "rgb(206, 176, 113)" }}>  «TURAMISUMO»</span>
            </h1>
        </div>
        <div className={styles.pricesTitle1}>
            <img src="https://www.s-caspiy.ru/img/separator.png" alt="" />
        </div>
        <div className={styles.pricesText}>
            Курорт TURAMISUMO предостовляет своим постояльцам номера, которые явлются лучшим продложением на рынке. Мы эталон надежности и качества.<br /> Вы можете поселиться у нас со своей второй половинкой или всей семьей.<br /> В любой случае вы не останетесь без яркий воспоминаний.
        </div>
        <div className={styles.mainContent}>
            <table>
                <tr>
                <th>ТИП КОМНАТЫ</th>
                <th>ЦЕНА (ЗА ДЕНЬ)</th>
                <th>КОЛИЧЕСТВО СПАЛЬНЫХ МЕСТ</th>
                <th>КРАТКОЕ ОПИСАНИЕ</th>
                </tr>
                <tr className={styles.tr}>
                <td>ПРЕЗИДЕНСТКИЙ НОМЕР</td>
                <td>12500₽</td>
                <td>1-6</td>
                <td className={styles.num}>Комната для настоящих VIP.<br /> В номер есть три спални с роскошными двуспальными кроватями, два санузла, кухня и прекрасный вид на море.</td>
                </tr>
                <tr>
                <td>ЛЮКСОВЫЙ НОМЕР</td>
                <td>9500₽</td>
                <td>1-6</td>
                <td className={styles.num}>Номер для тех, кто любит роскошь.<br /> В номере есть три спальни с двуспальными кроватями, один санузел и отличный вид на море.</td>
                </tr>
                <tr>
                <td>ПАРНЫЙ НОМЕР</td>
                <td>2700₽</td>
                <td>2</td>
                <td className={styles.num}>Номер на двоих.<br /> В номере есть одна спальня с двумя односпальными кроватями, один санузел и хороший вид на море.</td>
                </tr>
                <tr>
                <td>НОМЕР ДЛЯ МОЛОДОЖЕН</td>
                <td>3100₽</td>
                <td>2</td>
                <td className={styles.num}>Номер для молодожен.<br /> В номере есть одна спальня с двуспальной кроватью и один санузел. Также хороший вид на море.</td>
                </tr>
                <tr>
                <td>СЕМЕЙНЫЙ НОМЕР</td>
                <td>6400₽</td>
                <td>1-6</td>
                <td className={styles.num}>Номер для семьи.<br /> В номере есть две спальны с двуспальными кроватями, также имеется один двуспальный матрас, который можно разложить и два санузла.</td>
                </tr>
                <tr>
                <td>ОДИНОЧНЫЙ НОМЕР</td>
                <td>1700₽</td>
                <td>1</td>
                <td className={styles.num}>Номер для одного.<br /> В номере есть одна спальня с односпальней кроватью и один санузел.<br /> Номер для тех, кто хочет провести отпуск в гармонии с собой.</td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default Prices