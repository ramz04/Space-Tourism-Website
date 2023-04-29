/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        homemobile : 'url(../src/assets/home/background-home-mobile.jpg)',
        hometablet : 'url(../src/assets/home/background-home-tablet.jpg)',
        homedesktop : 'url(../src/assets/home/background-home-desktop.jpg)',
        destinationmobile : 'url(../src/assets/destination/background-destination-mobile.jpg)',
        destinationtablet : 'url(../src/assets/destination/background-destination-tablet.jpg)',
        destinationdesktop : 'url(../src/assets/destination/background-destination-desktop.jpg)',
        crewmobile : 'url(../src/assets/crew/background-crew-mobile.jpg)',
        crewtablet : 'url(../src/assets/crew/background-crew-tablet.jpg)',
        crewdesktop : 'url(../src/assets/crew/background-crew-desktop.jpg)',
        techdesktop : 'url(../src/assets/technology/background-technology-desktop.jpg)',
        techtablet : 'url(../src/assets/technology/background-technology-tablet.jpg)',
        techmobile: 'url(../src/assets/technology/background-technology-mobile.jpg)',


      },
      fontFamily : {
        bellefair : ['Bellefair'],
        barlow: ['Barlow Condensed']
      }
    },
  },
  plugins: [],
}
