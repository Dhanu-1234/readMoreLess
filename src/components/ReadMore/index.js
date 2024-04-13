import {useState} from 'react'
import {
  BgContainer,
  Heading,
  Image,
  Paragraph,
  Button,
  TextContainer,
} from './styledComponents'

const readMore =
  'Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components.'

const imageUrl = 'https://assets.ccbp.in/frontend/hooks/react-hooks-img.png'

const imageAltText = 'react hooks'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [show, setShow] = useState(false)

  const onClicked = () => {
    setShow(prevState => !prevState)
  }
  return (
    <BgContainer>
      <Heading>React Hooks</Heading>
      <Paragraph>Hooks are a new addition to React</Paragraph>
      <Image src={imageUrl} alt={imageAltText} />
      <TextContainer>
        <Paragraph>
          {show === true ? reactHooksDescription : readMore}
        </Paragraph>
      </TextContainer>
      <Button type="button" onClick={onClicked}>
        {show === true ? 'Read Less' : 'Read More'}
      </Button>
    </BgContainer>
  )
}

export default ReadMore
