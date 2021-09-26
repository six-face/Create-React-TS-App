import style from './style.less'
import reactIcon from '../emoticon.png'

export default function Home() {
  return (
    <div className={style.wrapper}>
      <img src={reactIcon} alt="" />
      <p className={style.title}>
        Welcome to your <em>ultimate</em>{' '}
        <span className={style.underLine}>React-TypeScript</span> Application!
      </p>
      <p className={style.subTitle}>
        You can write component(tsx) / css(less) and import static files such as
        images and use them as modules right now.
      </p>
      <p className={style.subTitle}>Enjoy : P</p>
    </div>
  )
}
