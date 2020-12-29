import React from 'react'
import './StartPage.css'
import Button from '../../BaseComponents/Button'
import { ReactComponent as ThumbsUpLogo } from '../../../Images/svg/thumbs-up.svg'
import useMedia from 'use-media'
import { MEDIA_QUERY_MOBILE } from '../../../Constants/MediaQueries'

type Props = Partial<{
  onButtonClick: (e: React.MouseEvent<HTMLButtonElement | HTMLElement>) => void
}>

const StartPage: React.FC<Props> = ({ onButtonClick }) => {
  const isWide = useMedia(MEDIA_QUERY_MOBILE)

  return (
    <main>
      <section className="main">
        <div className="main__wrapper">
          <div className="main__image">
            <ThumbsUpLogo />
          </div>
          <div className="main__text">
            <h1 className="main__title">Who wants to be a millionaire?</h1>
            {isWide ? (
              <Button onClick={onButtonClick} value="start">
                Start
              </Button>
            ) : (
              <Button onClick={onButtonClick} size="s" fullWidth value="start">
                Start
              </Button>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default StartPage
