import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import MainService from '../../services/MainService';
import CoordinatorInfo from '../Common/CoordinatorInfo';
import EventCard from './EventCard';

const index = () => {
  const APP_ICONS = [
    '1password.png',
    '3-dots.png',
    '4-dot-menu.png',
    'add.png',
    'adjustment.png',
    'airbnb.png',
    'alert.png',
    'amazon.png',
    'among-us.png',
    'android-store.png',
    'android.png',
    'aperture.png',
    'apple-logo.png',
    'battery.png',
    'bbc-iPlayer.png',
    'behance.png',
    'bluetooth.png',
    'book.png',
    'bubble-speech.png',
    'busuu.png',
    'calculator.png',
    'calendar.png',
    'camera-focus.png',
    'checklist.png',
    'clock-app.png',
    'cloud-sun.png',
    'compass.png',
    'credit-card.png',
    'deliveroo.png',
    'deviantart.png',
    'digital-camera.png',
    'discord.png',
    'disney-plus.png',
    'dot-list.png',
    'dotted-bubble-speech.png',
    'dribbble.png',
    'dropbox.png',
    'eject.png',
    'evernote.png',
    'excel.png',
    'facebook-messenger.png',
    'facebook.png',
    'facetime.png',
    'find-my.png',
    'fitness.png',
    'flickr.png',
    'folder.png',
    'football.png',
    'forward-icon.png',
    'foursquare.png',
    'gallery.png',
    'gmail.png',
    'googl-docs.png',
    'google-authenticator.png',
    'google-chrome.png',
    'google-drive.png',
    'google-meet.png',
    'google-photos.png',
    'google.png',
    'graph.png',
    'grid-view.png',
    'hbo-max.png',
    'heart.png',
    'home.png',
    'hulu.png',
    'inbox.png',
    'instagram.png',
    'iOS-store.png',
    'ios-x.png',
    'keynote.png',
    'keynotes.png',
    'lastpass.png',
    'letter.png',
    'linkedin.png',
    'map-pin.png',
    'menu-sign.png',
    'microphone.png',
    'microsoft-teams.png',
    'ms-words.png',
    'music-sign.png',
    'netflix.png',
    'news.png',
    'night.png',
    'notion.png',
    'numbers.png',
    'overcast.png',
    'padlock.png',
    'pages.png',
    'pause.png',
    'pay.png',
    'paypal.png',
    'phone.png',
    'piano.png',
    'pinterest.png',
    'plane.png',
    'playstation.png',
    'podcasts.png',
    'pokemon-go.png',
    'powerpoint.png',
    'prime-video.png',
    'procreate.png',
    'pubj.png',
    'radio.png',
    'recording.png',
    'reddit.png',
    'ribbon.png',
    'safari.png',
    'search.png',
    'setting-cog.png',
    'shield-secure.png',
    'shopping-cart.png',
    'shortcuts.png',
    'skype.png',
    'slack.png',
    'slider.png',
    'smartwatch.png',
    'snapchat.png',
    'speaker.png',
    'spotify.png',
    'steam.png',
    'stocks.png',
    'stop.png',
    'stumbleupon.png',
    'telegram.png',
    'tesla.png',
    'tiktok.png',
    'tinder.png',
    'translate.png',
    'tumblr.png',
    'tunein.png',
    'twitch.png',
    'twitter.png',
    'uber-eats.png',
    'uber.png',
    'unsafe.png',
    'user.png',
    'video-sign.png',
    'video.png',
    'vimeo.png',
    'wallet.png',
    'watch-video.png',
    'waze.png',
    'weather-cloud.png',
    'wechat.png',
    'whatsapp.png',
    'windows.png',
    'wireless.png',
    'xbox.png',
    'xing.png',
    'youtube.png',
    'zoom.png'
  ];
  const location = useLocation();
  const params = useParams();
  const [deptCoordies, setDeptCoordies] = useState([]);
  const dept_id = params.dept;
  const UNEXPECTED_ERROR_MSG = 'Please try again later!';
  const [events, setEvents] = useState([]);

  const fetchEvents = (deptEventId: string) => {
    MainService.getAllEventsOfDepartment(deptEventId)
      .then((data) => {
        if (data['success']) {
          setEvents(data['events']);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  const fetchDepartmentCoordies = (deptId: string) => {
    MainService.getDepartmentCoordies(deptId)
      .then((data) => {
        if (data['success']) {
          setDeptCoordies(data['deptEventCoordies']);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  useEffect(() => {
    if (dept_id) {
      fetchEvents(dept_id);
      fetchDepartmentCoordies(dept_id);
    }
  }, []);
  return (
    <div className="min-h-screen p-4 text-white bg-gray-900">
      <h2 className="text-xl font-semibold capitalize md:text-2xl lg:text-3xl title">
        events under
      </h2>
      <h2 className="text-4xl font-semibold tracking-widest uppercase md:text-5xl lg:text-6xl title">
        {location.state}
      </h2>
      <hr className="border-4 border-dotted" />
      {/* <div className="flex flex-wrap items-stretch gap-3 py-4"> */}
      <div className="grid grid-cols-1 gap-3 py-4 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {events.map((e, i) => {
          return (
            <EventCard
              key={e['id']}
              imgsrc={`/event-icons/${APP_ICONS[i % APP_ICONS.length]}`}
              title={e['name']}
              about={e['tagline']}
              redirectTo={e['id']}
              event={e}
            />
          );
        })}
      </div>
      <div>
        <h2 className="text-3xl text-white md:text-4xl lg:text-5xl">Deparment coordinators</h2>
        <div className="grid grid-cols-1 gap-3 py-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {deptCoordies.map((cord) => {
            return <CoordinatorInfo key={cord['userId']} cord={cord} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default index;
