import p1 from "../Data/image/1.jpg"
import p2 from "../Data/image/2.jpeg"
import p3 from "../Data/image/3.jpeg"
import p4 from "../Data/image/4.jpeg"
import p5 from "../Data/image/5.jpeg"
import p6 from "../Data/image/6.jpg"
import p7 from "../Data/image/7.jpeg"
import p8 from "../Data/image/8.jpeg"
import p9 from "../Data/image/9.jpg"
import p10 from "../Data/image/10.jpeg"
import p11 from "../Data/image/11.jpeg"
import p12 from "../Data/image/12.jpeg"
import p13 from "../Data/image/13.jpeg"
import p14 from "../Data/image/14.jpeg"
import p15 from "../Data/image/15.jpeg"
import { loadLocalRawResource } from "react-native-svg"









const Saree = [
    {
      id: 1,
      name: "Kanjivaram Silk",
      price: 5000,
      color: "Red",
      image: p1,
      description: "lorem ipsum dolor sit amet,um sit amet, sed diamlorem ipsum dolor sit amet, con em ipsum sit amet, sed diam" ,
    },
    {
      id: 2,
      name: "Banarasi Silk",
      price: 8000,
      color: "Blue",
      image: p2,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diam" ,
    },
    {
      id: 3,
      name: "Chiffon",
      price: 3000,
      color: "Pink",
      image: p3,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diam" ,
    },
    {
      id: 4,
      name: "Georgette",
      price: 4000,
      color: "Yellow",
      image: p4,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diam" ,
    },
    {
      id: 5,
      name: "Bandhani",
      price: 2500,
      color: "Green",
      image: p5,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diam" ,
    },
    {
      id: 6,
      name: "Tussar Silk",
      price: 6000,
      color: "Orange",
      image: p6,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diam" ,
    },
    {
      id: 7,
      name: "Cotton Silk",
      price: 3500,
      color: "Purple",
      image: p7,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diam" ,
    },
    {
      id: 8,
      name: "Net",
      price: 4500,
      color: "Black",
      image: p8,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diam" ,
    },
    {
      id: 9,
      name: "Satin",
      price: 7000,
      color: "Silver",
      image: p9,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diam" ,
    },
    {
      id: 10,
      name: "Linen",
      price: 5500,
      color: "Brown",
      image: p10,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diam" ,
    },
    {
      id: 11,
      name: "Kalamkari",
      price: 3800,
      color: "White",
      image: p11,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diam" ,
    },
    {
      id: 12,
      name: "Raw Silk",
      price: 4200,
      color: "Gold",
      image: p12,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diam" ,
    },
    {
      id: 13,
      name: "Chanderi",
      price: 3200,
      color: "Magenta",
      image: p13,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diam" ,
    },
    {
      id: 14,
      name: "Patola",
      price: 9000,
      color: "Maroon",
      image: p14,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diam" ,
    },
    {
      id: 15,
      name: "Embroidered",
      price: 4800,
      color: "Turquoise",
      image: p15,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diamlorem ipsum dolor sit amet, consectetur adipiscing lorem d isp lorem ipsum sit amet, sed diam" ,
    }
  ];
  
  export default Saree;
  