import snappyIcon from './src/assets/images/icon-snappy-process.svg';
import affordableIcon from './src/assets/images/icon-affordable-prices.svg';
import peopleIcon from './src/assets/images/icon-people-first.svg';

const benefitsList = [
  {
    id: 1,
    url: snappyIcon,
    alt: "snappy icon",
    title: "Snappy Process",
    text: `Our application process can be completed in minutes, not hours. Don’t get 
      stuck filling in tedious forms.`
  },
  {
    id: 2,
    url: affordableIcon,
    alt: "affordable icon",
    title: " Affordable Prices",
    text: `We don’t want you worrying about high monthly costs. Our prices may be low, 
    but we still offer the best coverage possible.`
  },
  {
    id: 3,
    url: peopleIcon,
    alt: "people first icon",
    title: "People First",
    text: `Our plans aren’t full of conditions and clauses to prevent payouts. We make 
    sure you’re covered when you need it.`
  }
]

export {benefitsList}