import React from "react"
import { Card, FlexRow, FlexColumn, Grid, Row } from "@bearui/ui"
import _ from "lodash"
import styled from "styled-components"
import pht1 from "../../assets/avocado_minimalism_pink_120543_3840x2400.jpg"
import pht3 from "../../assets/chris-lawton-5IHz5WhosQE-unsplash.jpg"
import pht5 from "../../assets/download.jpeg"

type NewsWidgetProps = {
  blogPosts?: BlogPostProps[]
}
type BlogPostProps = {
  id?: any
  img: string
  title: string
  description: string
  date: number
}

const CardContainer: any = styled(Card)`
  h5 {
    font-weight: 600;
  }
  .blog {
    position: relative;

    .details {
      h2 {
        font-size: 1.2rem;
        font-weight: 600;
      }
      span {
        font-size: 13px;
        color: #777777bb;
      }
    }
    .image-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
      height: 120px;

      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 100%;
        max-width: 120%;
        min-height: 100%;
        max-height: 120%;

        @media (max-width: 500px) {
          min-width: 100%;
          max-width: 170%;
          min-height: 100%;
          max-height: 150%;
        }
      }
    }
  }
`

const defaultBlogPosts: BlogPostProps[] = [
  {
    id: 13,
    img: pht1,
    title: "XRP news everyday",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consequatur ipsa, vel mollitia hic expedita porro quos amet illo iste recusandae ab sed quis, sint animi cum. Eum, quibusdam quasi!",
    date: Date.now(),
  },
  {
    id: 12,
    img: pht3,
    title: "Tesla buys $10 million dollars worth of Bitcoin",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consequatur ipsa, vel mollitia hic expedita porro quos amet illo iste recusandae ab sed quis, sint animi cum. Eum, quibusdam quasi!",
    date: Date.now(),
  },
  {
    id: 11,
    img: pht5,
    title: "Bitcoin to reach new record high",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consequatur ipsa, vel mollitia hic expedita porro quos amet illo iste recusandae ab sed quis, sint animi cum. Eum, quibusdam quasi!",
    date: Date.now(),
  },
]

const NewsWidget: React.FC<NewsWidgetProps> = ({
  blogPosts = defaultBlogPosts,
  ...props
}) => {
  return (
    <CardContainer mdCol="8" xsCol="12" {...props}>
      <h5>News Feed</h5>
      <FlexColumn gap="15px">
        {blogPosts.map((post: BlogPostProps) => {
          const date = new Date(post.date)
          const postDate = date.toDateString()
          return (
            <Row key={post.id} className="blog">
              <Grid xsCol="8">
                <FlexColumn gap="10px" className="details">
                  <h2>{post.title}</h2>
                  <p>{_.truncate(post.description, { length: 80 })}</p>
                  <span>{postDate}</span>
                </FlexColumn>
              </Grid>
              <Grid xsCol="1" />
              <Grid xsCol="3">
                <div className="image-wrapper">
                  <img src={post.img} alt={`${post.title} post`} />
                </div>
              </Grid>
            </Row>
          )
        })}
      </FlexColumn>
    </CardContainer>
  )
}

export default NewsWidget
