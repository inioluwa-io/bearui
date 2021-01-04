import img from "../../brooks-leibee-562087-unsplash.jpg"
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import img5 from "../../assets/img5.png"
import img6 from "../../assets/img6.jpg"
import img7 from "../../assets/img7.jpg"

export const mockUserContact: any = [
  {
    id: "1",
    name: "Steve Rogers",
    status: 1,
    img: img3,
    messages: [],
  },
  {
    id: "2",
    name: "Thor",
    status: 2,
    img: img2,
    messages: [{ time: Date.now(), content: "2d", user_id: 0 }],
  },
  {
    id: "3",
    name: "Black Widow",
    status: 0,
    img: img7,
    messages: [],
  },
  {
    id: "4",
    name: "Mantis",
    status: 1,
    img: img5,
    messages: [
      {
        time: Date.now(),
        content:
          "Reeserunt natus placeat corporis libero voluptas praesentium consequuntur, quia facere adipisci modi ratione in.",
        user_id: 0,
      },
      { time: Date.now(), content: "gfg3", user_id: 0 },
      {
        time: Date.now(),
        content:
          "elit Reiciendis ullam vel sapiente optio quas enim eum, deserunt natus placeat corporis libero voluptas praesentium consequuntur, quia facere adipisci modi ratione in.",
        user_id: 1,
      },
      {
        time: Date.now(),
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ullam vel sapiente optio quas enim eum, deserunt natus placeat corporis libero voluptas praesentium consequuntur, quia facere adipisci modi ratione in.",
        user_id: 0,
      },
      { time: Date.now(), content: "frfd", user_id: 0 },
      { time: Date.now(), content: "vr53", user_id: 1 },
      {
        time: Date.now(),
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ullam vel sapiente optio quas enim eum, deserunt natus placeat.",
        user_id: 2,
      },
      { time: Date.now(), content: "gfg3", user_id: 0 },
      {
        time: Date.now(),
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium consequuntur, quia facere adipisci modi ratione in.",
        user_id: 1,
      },
      { time: Date.now(), content: "vjnkerjk", user_id: 0 },
      { time: Date.now(), content: "vjk40ik", user_id: 1 },
      { time: Date.now(), content: "q3o3p", user_id: 1 },
    ],
  },
  {
    id: "51",
    name: "Thanos",
    status: 1,
    img: img6,
    messages: [],
  },
  {
    id: "6",
    name: "Nick Fury",
    status: 0,
    img: img1,
    messages: [{ time: Date.now(), content: "2d", user_id: 1 }],
  },
  {
    id: "7",
    name: "Star Lord",
    status: 0,
    img: img,
    messages: [],
  },
  {
    id: "8",
    name: "Rocket",
    status: 2,
    img: img7,
    messages: [],
  },
]
