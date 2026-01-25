import killDill from '../assets/kill-dill.jpg'
import Jamnapar from '../assets/jamnapaar.jpg'
import Bhootni from '../assets/bhootni.jpg'
import vitaminStree from '../assets/Vitamin-stree.jpg'
import fivestar from '../assets/5star.jpg'
import anurakti from '../assets/assets/Anurakti.png'
import atindriya from '../assets/assets/Atindriya.png'
import block from '../assets/assets/Block.png'
import dieShow from '../assets/assets/Die Show.png'
import ekBaarPhir from '../assets/assets/Ek baar phir.png'
import heteropia from '../assets/assets/Heterotopia.png'
import oneNight from '../assets/assets/One Night.png'

// Complete Portfolio Data for FilmCocoon
export const portfolioData = {
  'Web Series': [
    {
      id: 1,
      title: 'Jamnapar',
      description: 'An engaging drama series showcasing compelling narratives',
      thumbnail: Jamnapar,
      videoUrl: 'https://www.amazon.in/minitv/tp/78cf8211119-75cd-4784-8a96-3f5d8b9cd602',
      platform: 'Amazon miniTV',
      featured: false
    },
    {
      id: 2,
      title: 'Kill Dill - The Heartbreak Club',
      description: 'A captivating romantic drama series streaming on Amazon miniTV',
      thumbnail: killDill,
      videoUrl: 'https://www.amazon.in/minitv/tp/452ff72e-3652-4a4d-b15c-d83645a76776',
      platform: 'Amazon miniTV',
      featured: true
    },
  ],
  
  'Films': [
    {
      id: 3,
      title: 'Die Show',
      description: 'A thought-provoking feature film exploring complex human emotions',
      thumbnail: dieShow,
      videoUrl: 'https://drive.google.com/file/d/1I6KwFxgD301yD8cpLv0ZVpy-3iwj_VJJ/view',
      platform: 'Film',
      featured: true
    },
    {
      id: 4,
      title: 'One Night (Editor\'s Cut)',
      description: 'An intense narrative crafted with meticulous editing and storytelling',
      thumbnail:  oneNight,
      videoUrl: 'https://www.youtube.com/watch?v=14wrcHqC2kQ',
      platform: 'YouTube',
      featured: false
    },
    {
      id: 5,
      title: 'Bandits',
      description: 'A gripping crime drama with dynamic character arcs',
      thumbnail: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&q=80',
      videoUrl: '#',
      platform: 'Film',
      featured: false
    },
  ],
  
  // 'Micro Dramas': [
  //   {
  //     id: 6,
  //     title: 'Coming Soon on Zee5',
  //     description: 'Exciting short-form content launching soon on Zee5 platform',
  //     thumbnail: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
  //     videoUrl: '#',
  //     platform: 'Zee5',
  //     featured: false
  //   },
  //   {
  //     id: 7,
  //     title: 'Coming Soon on Zee5',
  //     description: 'Another compelling micro drama project in the pipeline',
  //     thumbnail: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
  //     videoUrl: '#',
  //     platform: 'Zee5',
  //     featured: false
  //   },
  // ],
  
  'Commercial Projects': [
    {
      id: 8,
      title: 'The Bhootnni - Official Trailer',
      description: 'Spine-chilling horror film trailer with atmospheric storytelling',
      thumbnail: Bhootni,
      videoUrl: 'https://www.youtube.com/watch?v=L8Wfzxch7Xo',
      platform: 'YouTube',
      featured: true
    },
    {
      id: 9,
      title: 'Hair Growth Advertisement',
      description: 'Creative commercial showcasing product benefits with visual storytelling',
      thumbnail: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80',
      videoUrl: 'https://www.instagram.com/reel/DFeuJ8vITfM/',
      platform: 'Instagram',
      featured: false
    },
    {
      id: 10,
      title: 'Shrushti Oswal - Acting Showreel',
      description: 'Professional acting portfolio showcasing diverse performances',
      thumbnail: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&q=80',
      videoUrl: 'https://www.youtube.com/watch?v=kL3UIpMsfQg',
      platform: 'YouTube',
      featured: false
    },
    {
      id: 11,
      title: 'Prajjval Khakharia - Acting Showreel',
      description: 'Curated collection of impactful acting moments and scenes',
      thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
      videoUrl: 'https://www.youtube.com/watch?v=GiWUXTp-aLM',
      platform: 'YouTube',
      featured: false
    },
    {
      id: 12,
      title: 'Beach Day',
      description: 'Vibrant lifestyle content capturing moments of joy and freedom',
      thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
      videoUrl: 'https://www.instagram.com/p/B8LQqsAgFnu/',
      platform: 'Instagram',
      featured: false
    },
    {
      id: 13,
      title: 'Restaurant Experience',
      description: 'Engaging commercial showcasing culinary excellence and ambiance',
      thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
      videoUrl: 'https://www.instagram.com/reel/CfTwi3sjVpg/',
      platform: 'Instagram',
      featured: false
    },
    {
      id: 14,
      title: 'Vitamin Stree x MSD',
      description: 'Creative brand collaboration featuring dynamic storytelling',
      thumbnail: vitaminStree,
      videoUrl: 'https://www.youtube.com/watch?v=a_hzRT7faO4',
      platform: 'YouTube',
      featured: false
    },
    {
      id: 15,
      title: 'Doon',
      description: 'Atmospheric visual narrative capturing essence and emotion',
      thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      videoUrl: 'https://www.instagram.com/p/CBBgAiOASC1/',
      platform: 'Instagram',
      featured: false
    },
  ],
  
  'Direction & Editing': [
    {
      id: 16,
      title: 'Heterotopia',
      description: 'Experimental narrative exploring themes of space and identity',
      thumbnail: heteropia,
      videoUrl: 'https://youtube.com/watch?v=iyj_AQjJ-1k',
      platform: 'YouTube',
      featured: false
    },
    {
      id: 17,
      title: 'Block',
      description: 'Innovative short film showcasing directorial vision and editing prowess',
      thumbnail: block,
      videoUrl: 'https://www.youtube.com/watch?v=OVe6AIYW3aI',
      platform: 'YouTube',
      featured: false
    },
  ],
  
  'Assistant Director Work': [
    {
      id: 18,
      title: 'Destroy Valentine\'s Day - Cadbury 5 Star',
      description: 'High-profile commercial campaign with creative storytelling',
      thumbnail: fivestar,
      videoUrl: 'https://youtube.com/watch?v=dxECFQr533o',
      platform: 'YouTube',
      featured: false
    },
    {
      id: 19,
      title: 'Anurakti',
      description: 'Compelling narrative showcasing assistant direction skills',
      thumbnail: anurakti,
      videoUrl: 'https://drive.google.com/file/d/1BLWQyIaUD-JHkSfBSbJHayqJRay3UB6J/view',
      platform: 'Film',
      featured: false
    },
    {
      id: 20,
      title: 'Ek Baar Phir',
      description: 'Emotionally resonant short film with layered storytelling',
      thumbnail: ekBaarPhir,
      videoUrl: 'https://drive.google.com/file/d/1lMWZywpxcSiyekph2MZac1JyptIZ04AX/view',
      platform: 'Film',
      featured: false
    },
    {
      id: 21,
      title: 'Atindriya',
      description: 'Mystical narrative exploring supernatural themes',
      thumbnail: atindriya,
      videoUrl: 'https://whistlingwoods-my.sharepoint.com/personal/shetye_laukik_whistlingwoods_net/_layouts/15/stream.aspx?id=%2Fpersonal%2Fshetye%5Flaukik%5Fwhistlingwoods%5Fnet%2FDocuments%2FLOCATION%20DEVS%2FSO%5FVOD%5FAUDI%2FVIDEO%2FAtindriya%5FH%2E264%2Emov',
      platform: 'Film',
      featured: false
    },
  ],
};

// Featured/Recent projects for the Recent Work section
export const recentWorkData = [
  {
    id: 1,
    title: 'Kill Dill - The Heartbreak Club',
    description: 'A captivating romantic drama series streaming on Amazon miniTV, exploring modern relationships',
    thumbnail: 'https://images.unsplash.com/photo-1574267432644-f86c5ab3b29e?w=800&q=80',
    videoUrl: 'https://www.amazon.in/minitv/tp/452ff72e-3652-4a4d-b15c-d83645a76776',
    category: 'Web Series',
    platform: 'Amazon miniTV'
  },
  {
    id: 8,
    title: 'The Bhootnni - Official Trailer',
    description: 'Spine-chilling horror film trailer with atmospheric storytelling and visual excellence',
    thumbnail: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=800&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=L8Wfzxch7Xo',
    category: 'Commercial',
    platform: 'YouTube'
  },
  {
    id: 3,
    title: 'Die Show',
    description: 'A thought-provoking feature film exploring complex human emotions and relationships',
    thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80',
    videoUrl: 'https://drive.google.com/file/d/1I6KwFxgD301yD8cpLv0ZVpy-3iwj_VJJ/view',
    category: 'Film',
    platform: 'Film'
  },
];