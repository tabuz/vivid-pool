export default {
  nav: {
    home: 'Home',
    guide: 'Guide',
    about_us: 'About Us',
    contact: 'Contact',
    security: 'Security',
  },
  index: {
    _title: 'Home Page',
    slogan: 'The future is here.',
    blurp: `
      Meet international staking pools validators for Cardano. 
      We're offering cutting edge cryptocurrency technology of today and 
      tomorrow. Join us today on this exciting journey!
    `,
    get_started_front: 'Get Started',
    get_started_back: 'Now',
  },
  video: {
    title: 'Video Guides',
  },
  contact: {
    title: 'Contact',
    subtitle: `If you have any questions please do not hesitate to contact 
      us on socials or via contact form message. We will try to anwser you 
      questions you as soon as possible.
    `,
  },
  contact_form: {
    name: 'Name',
    message: 'Message',
    send_front: 'Send',
    send_back: 'Now',
  },
  about: {
    title: 'Team',
    _title: 'Meet the team',
    subtitle: `
      We have been friends who know each other for over 10 years.
      The cutting edge technologies have always been our main point of 
      interest. The concept of the block chain showed all of us new 
      possibilities and solutions to problems created by the digital 
      age. Inspired by that we decided to be a part of the decentralization 
      movement. The two projects about which we are mostly excited are 
      Cardano and Polkadot. They are the best example of the last 12 
      years of progress which have been made in block chain technologies.
    `,
    rafal: `
      I'm software tester/developer with over 5 years of experience in a 
      field. I used to study IT at Cracow University of Technology. My 
      programming skills include languages like: Python, C#, bash and 
      Solidity. In a Vivid Pool my role is to operate the pools and provide 
      them security. In free time martial artist and motorbike rider.
    `,
    patryk: `
      If I would describe myself in a few words I would say I am a vivid 
      soul. I love adventures, new opportunities and journeys. I have 
      graduated from Warsaw School of Economics in Quantitative Methods 
      in Economics and Information Systems, currently working for an 
      International company as an analyst. I am the youngest member of 
      vivid team who is responsible for communication, social media and
      research. So if you have any questions you will most probably contact 
      me :)
    `,
    hubert: `
      Hi, I'm Hubert, special tasks man. When something doesn't work right
      that's what makes me excited most. Programming is my passion which
      I dedicate my whole life to. Profesionally I'm CTO of "Foodiependent" start-up
      where I'm responsible for integration of multiple systems. Website you looking
      at now - hope you like it - we've put a lot of heart into it 🤘.
    `,
  },
  security: {
    title: 'Security',
    subtitle: `
      The security of our pools is our main goal. Please see the list below to get 
      familiar with some of our security procedures. Keep in mind that some of our 
      security measurements can’t be listed here as it could help with potential 
      attack.`,
    measures: [
      {
        title: '1 block producer node, 2 relay nodes',
        text: `
          The block producer node communicates with the rest of the network through 
          relay nodes. If the relay node is offline, then the block producer node 
          can’t connect to the network. It’s good practise to have 2 relay nodes 
          connected into the block producer node in case one of the relay nodes fail.
        `,
      },
      {
        title: 'Different VPS providers for each of our nodes',
        text: `
          The diversification of our nodes is one of the most important aspects of 
          our security measurements. In situations when one of our VPS providers has 
          a problem with his infrastructure, we are not complicit depending on his 
          services. In the future we are planning to set up few nodes in house
        `,
      },
      {
        title: 'Servers for nodes located in three different countries',
        text: `Poland, Belgium, Germany`,
      },
      {
        title: '3 sets of pool keys exist',
        text: `
          located in two different countries (Poland, United Kingdom) in three 
          different cities where each set of keys is encrypted
        `,
      },
      {
        title: 'Pool keys has not been exposed into internet',
      },
      {
        title:
          'Node monitoring in a case if intruder break through the firewalls',
      },
    ],
  },
  guide: {
    title: `The Guide`,
    subtitle: `
      Please follow tutorial below which will show you step-by-step how
      to participate to our staking pool. In few simple steps you should 
      obtain ADA, create your own digital wallet and stake with Vivid Pools.
    `,
    on_this_page: 'On this page',
    questions: {
      0: {
        q: 'What is your level of knowledge about blockchain technology?',
        a_1: 'Beginner',
        a_1_category: 'essentials',
        a_1_article: 'beginner',
        a_2: 'Intermediate',
        a_2_category: 'essentials',
        a_2_article: 'intermediate',
        a_3: 'Advanced',
      },
      1: {
        q: 'Do you already have ADA cryptocurrency?',
        a_1: 'Yes',
        a_2: 'No',
        a_2_category: 'exchanges',
        a_2_article: 'about-exchanges',
      },
      2: {
        q: 'What is your preffered way of controling you digital wallet?',
        a_1: 'Mobile',
        a_2: 'Desktop',
      },
      3: {
        q: 'Do you already have Yoroi wallet setup?',
        a_1: 'Yes',
        a_1_category: 'stake',
        a_1_article: 'stake-with-yoroi',
        a_2: 'No',
        a_2_category: 'wallets',
        a_2_article: 'about-wallets',
      },
      4: {
        q: 'Do you already have Yoroi or Daedalus wallet?',
        a_1: 'Yoroi',
        a_1_category: 'stake',
        a_1_article: 'stake-with-yoroi',
        a_2: 'Daedalus',
        a_2_category: 'stake',
        a_2_article: 'stake-with-daedalus',
        a_3: 'None',
        a_3_category: 'wallets',
        a_3_article: 'about-wallets',
      },
    },
  },
}
