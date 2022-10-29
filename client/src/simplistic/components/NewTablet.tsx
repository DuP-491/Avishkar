import React, { useEffect, useState } from 'react';
import MainService from '../services/MainService';
import tabletBg from '../../images/tablet_bg.png';
import defaultPfp from '../../images/default_pfp.png';
import UserService from '../services/UserService';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import AdminService from '../services/AdminService';
import CoordieService from '../services/CoordieService';
import TeamAvishkar from './TeamAvishkar';
import Sponsors from './Sponsors';

function NewTablet(props: Props) {
  const { deptId, currTab, logout, closePopup } = props;
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
  const UNEXPECTED_ERROR_MSG = 'Please try again later!';
  const LOGIN_AGAIN_PROMPT = 'Please login again!';

  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState(currTab);
  const [departments, setDepartments] = useState<{
    [key: string]: any;
  }>({});
  const [deptCoordies, setDeptCoordies] = useState([]);
  const [eventCoordies, setEventCoordies] = useState([]);
  const [sponsors, setSponsors] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedDeptID, setSelectedDeptID] = useState(-1);
  const [selectedEventID, setSelectedEventID] = useState(-1);
  const [eventSection, setEventSection] = useState(0);
  const [profileSection, setProfileSection] = useState(0);
  const [userDetails, setUserDetails] = useState({
    id: '',
    name: '',
    email: '',
    username: '',
    role: 'USER',
    mobile: '',
    collegeName: '',
    score: '',
    // gender: '',
    resumeLink: '',
    isFeePaid: false
  });
  const [newUserDetails, setNewUserDetails] = useState({
    name: '',
    username: '',
    mobile: '',
    collegeName: '',
    resumeLink: ''
  });
  const [newDeptEvent, setNewDeptEvent] = useState({
    name: '',
    organizer: '',
    desc: ''
  });
  const [newEvent, setNewEvent] = useState({
    name: '',
    tagline: '',
    details: '',
    criteria: '',
    rules: '',
    psLink: '',
    poster: '',
    maxTeamSize: 1,
    minTeamSize: 1,
    deptEventId: ''
  });
  const [newUpdateEvent, setNewUpdateEvent] = useState({
    id: '',
    name: '',
    tagline: '',
    details: '',
    criteria: '',
    rules: '',
    psLink: '',
    poster: '',
    maxTeamSize: 1,
    minTeamSize: 1
  });
  const [newDeptCoordie, setNewDeptCoordie] = useState({
    userId: '',
    deptEventId: ''
  });
  const [delDeptCoordie, setDelDeptCoordie] = useState('');
  const [currEUDDept, setCurrEUDDept] = useState('');
  const [currECUD, setCurrECUD] = useState({
    email: '',
    deptEventId: '',
    eventId: ''
  });
  const [currSponsorAUD, setCurrSponsorAUD] = useState({
    name: '',
    poster: '',
    title: 'No',
    deptEventId: '',
    eventId: ''
  });
  const [updatedSponsor, setUpdatedSponsor] = useState({
    name: '',
    poster: '',
    title: 'No',
    deptEventId: '',
    eventId: ''
  });

  const [teams, setTeams] = useState([]);
  const [teamMembers, setTeamMembers] = useState({});
  const [participatingTeam, setParticipatingTeam] = useState(null);
  const [showInviteUsernames, setShowInviteUsernames] = useState({});
  const [inviteUsernames, setInviteUsernames] = useState({});
  const [showUpdateTeamnames, setShowUpdateTeamnames] = useState({});
  const [updateTeamnames, setUpdateTeamnames] = useState({});
  const [currDCIndex, setCurrDCIndex] = useState(0);

  useEffect(() => {
    fetchDepartmentEvents();
    fetchUserDetails();
    fetchTeamInvites();
    setLoading(false);
    if (tab === 'Profile') {
      setProfileSection(0);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(departments).length > 0 && deptId) {
      handleSelectDept(deptId);
    }
  }, [departments]);

  useEffect(() => {
    if (tab === 'Profile' && 2 <= profileSection && profileSection <= 4) fetchTeamInvites();
    fetchDepartmentEvents();
  }, [profileSection]);

  useEffect(() => {
    if (selectedDeptID !== -1) {
      fetchEvents(departments[selectedDeptID]['id']);
      fetchDepartmentCoordies(departments[selectedDeptID]['id']);
    }
  }, [selectedDeptID]);

  useEffect(() => {
    if (delDeptCoordie !== '' && tab === 'Profile') {
      fetchDepartmentCoordies(delDeptCoordie);
    }
  }, [delDeptCoordie]);

  useEffect(() => {
    if (currEUDDept !== '' && tab === 'Profile') {
      fetchEvents(currEUDDept);
    }
  }, [currEUDDept]);

  useEffect(() => {
    if (currECUD['deptEventId'] !== '' && tab === 'Profile') {
      fetchEvents(currECUD['deptEventId']);
    }
  }, [currECUD['deptEventId']]);

  useEffect(() => {
    if (currECUD['eventId'] !== '' && tab === 'Profile') {
      fetchEventCoordies(currECUD['eventId']);
    }
  }, [currECUD['eventId']]);

  useEffect(() => {
    if (currSponsorAUD['deptEventId'] !== '' && tab === 'Profile') {
      fetchEvents(currSponsorAUD['deptEventId']);
    }
  }, [currSponsorAUD['deptEventId']]);

  useEffect(() => {
    if (currSponsorAUD['eventId'] !== '' && tab === 'Profile') {
      fetchEventSponsors(currSponsorAUD['eventId']);
    }
  }, [currSponsorAUD['eventId']]);

  useEffect(() => {
    if (selectedEventID !== -1) {
      fetchEventCoordies(events[selectedEventID]['id']);
      fetchEventSponsors(events[selectedEventID]['id']);
      fetchParticipation(events[selectedEventID]['id']);
    }
  }, [selectedEventID]);

  const fetchDepartmentEvents = () => {
    MainService.getAllDepartmentEvents()
      .then((data) => {
        if (data['success']) {
          if (data['departmentEvents'].length !== 0) {
            setDelDeptCoordie(data['departmentEvents'][0]['id']);
            setCurrEUDDept(data['departmentEvents'][0]['id']);
            setCurrECUD({ ...currECUD, deptEventId: data['departmentEvents'][0]['id'] });
            setCurrSponsorAUD({
              ...currSponsorAUD,
              deptEventId: data['departmentEvents'][0]['id']
            });
            setNewEvent({ ...newEvent, deptEventId: data['departmentEvents'][0]['id'] });
          }

          let parsedDepartments: any = {};
          data['departmentEvents'].forEach((dept: any) => {
            parsedDepartments[dept['id']] = dept;
          });
          setDepartments(parsedDepartments);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  const fetchEvents = (deptEventId: string) => {
    MainService.getAllEventsOfDepartment(deptEventId)
      .then((data) => {
        if (data['success']) {
          if (data['events'].length !== 0) {
            setCurrECUD({ ...currECUD, eventId: data['events'][0]['id'] });
            setCurrSponsorAUD({ ...currSponsorAUD, eventId: data['events'][0]['id'] });
          }
          setEvents(data['events']);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  const fetchEventSponsors = (eventId: string) => {
    MainService.getEventSponsors(eventId)
      .then((data) => {
        if (data['success']) {
          setSponsors(data['eventSponsors']);
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
          setCurrDCIndex(0);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  const fetchEventCoordies = (eventId: string) => {
    MainService.getEventCoordies(eventId)
      .then((data) => {
        if (data['success']) {
          setEventCoordies(data['eventCoordies']);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  const fetchParticipation = (eventId: string) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      return;
    }
    UserService.checkEventParticipation(token, eventId)
      .then((data) => {
        if (data['success']) {
          if (data['participatingTeam'].length !== 0)
            setParticipatingTeam(data['participatingTeam'][0]);
          else setParticipatingTeam(null);
        } else if (data['message'] === 'Invalid token!') {
          closePopup();
          logout();
          toast.error(LOGIN_AGAIN_PROMPT);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  const fetchUserDetails = () => {
    const token = Cookies.get('token');
    if (token === undefined) {
      if (tab === 'Profile') {
        closePopup();
        logout();
      }
      return;
    }
    UserService.getUserDetails(token)
      .then((data) => {
        if (data['success']) {
          if (data['details']['resumeLink'] === null) data['details']['resumeLink'] = '';
          setUserDetails(data['details']);
          setNewUserDetails(data['details']);
        } else if (data['message'] === 'Invalid token!') {
          closePopup();
          logout();
          toast.error(LOGIN_AGAIN_PROMPT);
        } else logout();
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  const handleEditDetails = () => {
    const token = Cookies.get('token');
    if (token === undefined) {
      closePopup();
      logout();
      return;
    }
    UserService.updateUserDetails(
      token,
      newUserDetails['name'],
      newUserDetails['username'],
      newUserDetails['collegeName'],
      newUserDetails['mobile'],
      newUserDetails['resumeLink']
    )
      .then((data) => {
        if (data['success']) {
          fetchUserDetails();
          setProfileSection(0);
          toast.success('Details Edited Successfully!');
        } else if (data['message'] === 'Invalid token!') {
          closePopup();
          logout();
          toast.error(LOGIN_AGAIN_PROMPT);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  const fetchTeamInvites = () => {
    const token = Cookies.get('token');
    if (token === undefined) {
      if (tab === 'Profile') {
        closePopup();
        logout();
      }
      return;
    }
    UserService.getTeamInvites(token)
      .then((data) => {
        if (data['success']) {
          setTeams(data['teams']);
          setTeamMembers(
            Object.fromEntries(data['teams'].map((team: any) => [team['teamId'], []]))
          );
          setShowInviteUsernames(
            Object.fromEntries(data['teams'].map((team: any) => [team['teamId'], false]))
          );
          setInviteUsernames(
            Object.fromEntries(data['teams'].map((team: any) => [team['teamId'], '']))
          );
          setShowUpdateTeamnames(
            Object.fromEntries(data['teams'].map((team: any) => [team['teamId'], false]))
          );
          setUpdateTeamnames(
            Object.fromEntries(data['teams'].map((team: any) => [team['teamId'], '']))
          );
        } else if (data['message'] === 'Invalid token!') {
          closePopup();
          logout();
          toast.error(LOGIN_AGAIN_PROMPT);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  const fetchTeamMembers = (teamId: number) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      if (tab === 'Profile') {
        closePopup();
        logout();
      }
      return;
    }
    UserService.getTeamMembers(token, teamId)
      .then((data) => {
        if (data['success']) {
          setTeamMembers({ ...teamMembers, [teamId]: data['members'] });
        } else if (data['message'] === 'Invalid token!') {
          closePopup();
          logout();
          toast.error(LOGIN_AGAIN_PROMPT);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  const handleCreateTeam = () => {
    const token = Cookies.get('token');
    if (token === undefined) {
      closePopup();
      logout();
      return;
    }
    UserService.createTeam(token)
      .then((data) => {
        if (data['success']) {
          toast.success('Team Created Successfully!');
          fetchTeamInvites();
        } else if (data['message'] === 'Invalid token!') {
          closePopup();
          logout();
          toast.error(LOGIN_AGAIN_PROMPT);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  const handleUpdateTeam = (teamId: number) => {
    if (!(showUpdateTeamnames as { [key: number]: Boolean })[teamId]) {
      setShowUpdateTeamnames({ ...showUpdateTeamnames, [teamId]: true });
      return;
    }
    const token = Cookies.get('token');
    if (token === undefined) {
      closePopup();
      logout();
      return;
    }
    UserService.updateTeam(token, teamId, (updateTeamnames as { [key: number]: string })[teamId])
      .then((data) => {
        if (data['success']) {
          toast.success('Changed Team Name Successfully!');
          fetchTeamInvites();
        } else if (data['message'] === 'Invalid token!') {
          closePopup();
          logout();
          toast.error(LOGIN_AGAIN_PROMPT);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  const handleDeleteTeam = (teamId: number) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      closePopup();
      logout();
      return;
    }
    UserService.removeTeam(token, teamId)
      .then((data) => {
        if (data['success']) {
          toast.success('Team Deleted Successfully!');
          fetchTeamInvites();
        } else if (data['message'] === 'Invalid token!') {
          closePopup();
          logout();
          toast.error(LOGIN_AGAIN_PROMPT);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  const handleInviteUser = (teamId: number) => {
    if (!(showInviteUsernames as { [key: string]: Boolean })[teamId]) {
      setShowInviteUsernames({ ...showInviteUsernames, [teamId]: true });
      return;
    }
    const token = Cookies.get('token');
    if (token === undefined) {
      closePopup();
      logout();
      return;
    }
    UserService.inviteUser(token, teamId, (inviteUsernames as { [key: string]: string })[teamId])
      .then((data) => {
        if (data['success']) {
          toast.success('User Invited Successfully!');
          setShowInviteUsernames({ ...showInviteUsernames, [teamId]: false });
          setInviteUsernames({ ...inviteUsernames, [teamId]: '' });
          setProfileSection(2);
        } else if (data['message'] === 'Invalid token!') {
          closePopup();
          logout();
          toast.error(LOGIN_AGAIN_PROMPT);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  const handleRespondTeamInvite = (teamId: number, status: string) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      closePopup();
      logout();
      return;
    }
    UserService.responseToTeamInvite(token, teamId, status)
      .then((data) => {
        if (data['success']) {
          toast.success('Responded to Invite Successfully!');
          fetchTeamInvites();
        } else if (data['message'] === 'Invalid token!') {
          closePopup();
          logout();
          toast.error(LOGIN_AGAIN_PROMPT);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  const handleRemoveMember = (teamId: number, userId: string) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      closePopup();
      logout();
      return;
    }
    UserService.deleteMember(token, teamId, userId)
      .then((data) => {
        if (data['success']) {
          toast.success('Removed Member Successfully!');
          setProfileSection(2);
          fetchTeamInvites();
        } else if (data['message'] === 'Invalid token!') {
          closePopup();
          logout();
          toast.error(LOGIN_AGAIN_PROMPT);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  const handleParticipate = (teamId: number, eventId: string) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      closePopup();
      logout();
      return;
    }
    UserService.eventParticipate(token, teamId, eventId)
      .then((data) => {
        if (data['success']) {
          setEventSection(0);
          fetchParticipation(events[selectedEventID]['id']);
          toast.success('Registered for Event Successfully!');
        } else if (data['message'] === 'Invalid token!') {
          closePopup();
          logout();
          toast.error(LOGIN_AGAIN_PROMPT);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  const handleUnparticipate = (teamId: number, eventId: string) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      logout();
      return;
    }
    UserService.eventUnparticipate(token, teamId, eventId)
      .then((data) => {
        if (data['success']) {
          setEventSection(0);
          fetchParticipation(events[selectedEventID]['id']);
          toast.success('Unregistered for Event Successfully!');
        } else if (data['message'] === 'Invalid token!') {
          closePopup();
          logout();
          toast.error(LOGIN_AGAIN_PROMPT);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  const handleAddDepartmentEvent = (name: string, organizer: string, desc: string) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      closePopup();
      logout();
      return;
    }
    AdminService.addDepartmentEvent(token, name, organizer, desc)
      .then((data) => {
        if (data['success']) {
          toast.success('Created Department Event Successfully');
          fetchDepartmentEvents();
        } else if (data['message'] === 'Invalid token!') {
          closePopup();
          logout();
          toast.error(LOGIN_AGAIN_PROMPT);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  const handleDeleteDepartmentEvent = (id: string) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      closePopup();
      logout();
      return;
    }
    AdminService.removeDepartmentEvent(token, id)
      .then((data) => {
        if (data['success']) {
          toast.success('Deleted Department Event Successfully');
          fetchDepartmentEvents();
        } else if (data['message'] === 'Invalid token!') {
          closePopup();
          logout();
          toast.error(LOGIN_AGAIN_PROMPT);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  const handleAddDepartmentEventCoordie = (userId: string, deptEventId: string) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      closePopup();
      logout();
      return;
    }
    AdminService.addDepartmentCoordie(token, userId, deptEventId)
      .then((data) => {
        if (data['success']) {
          toast.success('Created Department Event Coordie Successfully');
          if (delDeptCoordie !== '') {
            fetchDepartmentCoordies(delDeptCoordie);
          }
        } else if (data['message'] === 'Invalid token!') {
          closePopup();
          logout();
          toast.error(LOGIN_AGAIN_PROMPT);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  const handleRemoveDepartmentEventCoordie = (userId: string, deptEventId: string) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      closePopup();
      logout();
      return;
    }
    AdminService.removeDepartmentCoordie(token, userId, deptEventId)
      .then((data) => {
        if (data['success']) {
          toast.success('Deleted Department Event Coordie Successfully');
          fetchDepartmentCoordies(delDeptCoordie);
        } else if (data['message'] === 'Invalid token!') {
          closePopup();
          logout();
          toast.error(LOGIN_AGAIN_PROMPT);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  const handleAddEvent = (
    name: string,
    tagline: string,
    details: string,
    criteria: string,
    rules: string,
    psLink: string,
    poster: string,
    maxTeamSize: number,
    minTeamSize: number,
    deptEventId: string
  ) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      closePopup();
      logout();
      return;
    }
    CoordieService.addEvent(
      token,
      name,
      tagline,
      details,
      criteria,
      rules,
      psLink,
      poster,
      maxTeamSize,
      minTeamSize,
      deptEventId
    )
      .then((data) => {
        if (data['success']) {
          toast.success('Added Event Successfully');
          setNewEvent({
            name: '',
            tagline: '',
            details: '',
            criteria: '',
            rules: '',
            psLink: '',
            poster: '',
            maxTeamSize: 1,
            minTeamSize: 1,
            deptEventId: ''
          });
        } else if (data['message'] === 'Invalid token!') {
          closePopup();
          logout();
          toast.error(LOGIN_AGAIN_PROMPT);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  const handleUpdateEvent = (
    id: string,
    name: string,
    tagline: string,
    details: string,
    criteria: string,
    rules: string,
    psLink: string,
    poster: string,
    maxTeamSize: number,
    minTeamSize: number
  ) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      closePopup();
      logout();
      return;
    }
    CoordieService.updateEvent(
      token,
      id,
      name,
      tagline,
      details,
      criteria,
      rules,
      psLink,
      poster,
      maxTeamSize,
      minTeamSize
    )
      .then((data) => {
        if (data['success']) {
          toast.success('Updated Event Successfully');
          fetchEvents(currEUDDept);
          setNewUpdateEvent({
            id: '',
            name: '',
            tagline: '',
            details: '',
            criteria: '',
            rules: '',
            psLink: '',
            poster: '',
            maxTeamSize: 1,
            minTeamSize: 1
          });
        } else if (data['message'] === 'Invalid token!') {
          closePopup();
          logout();
          toast.error(LOGIN_AGAIN_PROMPT);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  const handleDeleteEvent = (id: string) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      closePopup();
      logout();
      return;
    }
    CoordieService.removeEvent(token, id)
      .then((data) => {
        if (data['success']) {
          toast.success('Deleted Event Successfully');
          fetchEvents(currEUDDept);
        } else if (data['message'] === 'Invalid token!') {
          closePopup();
          logout();
          toast.error(LOGIN_AGAIN_PROMPT);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  const handleAddEventCoordie = (userId: string, eventId: string) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      closePopup();
      logout();
      return;
    }
    CoordieService.addEventCoordie(token, userId, eventId)
      .then((data) => {
        if (data['success']) {
          toast.success('Created Event Coordie Successfully');
          fetchEventCoordies(currECUD['eventId']);
          setCurrECUD({ ...currECUD, email: '' });
        } else if (data['message'] === 'Invalid token!') {
          closePopup();
          logout();
          toast.error(LOGIN_AGAIN_PROMPT);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  const handleRemoveEventCoordie = (userId: string, eventId: string) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      closePopup();
      logout();
      return;
    }
    CoordieService.removeEventCoordie(token, userId, eventId)
      .then((data) => {
        if (data['success']) {
          toast.success('Deleted Event Coordie Successfully');
          fetchEventCoordies(currECUD['eventId']);
        } else if (data['message'] === 'Invalid token!') {
          closePopup();
          logout();
          toast.error(LOGIN_AGAIN_PROMPT);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  const handleAddEventSponsor = (name: string, poster: string, title: Boolean, eventId: string) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      logout();
      return;
    }
    CoordieService.addEventSponsor(token, name, poster, title, eventId)
      .then((data) => {
        if (data['success']) {
          toast.success('Created Event Sponsor Successfully');
          fetchEventSponsors(currSponsorAUD['eventId']);
          setCurrSponsorAUD({ ...currSponsorAUD, name: '', poster: '', title: 'No' });
        } else if (data['message'] === 'Invalid token!') {
          closePopup();
          logout();
          toast.error(LOGIN_AGAIN_PROMPT);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  const handleUpdateEventSponsor = (
    name: string,
    poster: string,
    title: Boolean,
    eventId: string
  ) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      logout();
      return;
    }
    CoordieService.updateEventSponsor(token, name, poster, title, eventId)
      .then((data) => {
        if (data['success']) {
          toast.success('Updated Event Sponsor Successfully');
          fetchEventSponsors(currSponsorAUD['eventId']);
          setUpdatedSponsor({ ...updatedSponsor, name: '', poster: '', title: 'No' });
        } else if (data['message'] === 'Invalid token!') {
          closePopup();
          logout();
          toast.error(LOGIN_AGAIN_PROMPT);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  const handleRemoveEventSponsor = (name: string, eventId: string) => {
    const token = Cookies.get('token');
    if (token === undefined) {
      logout();
      return;
    }
    CoordieService.removeEventSponsor(token, name, eventId)
      .then((data) => {
        if (data['success']) {
          toast.success('Deleted Event Sponsor Successfully');
          fetchEventSponsors(currSponsorAUD['eventId']);
        } else if (data['message'] === 'Invalid token!') {
          closePopup();
          logout();
          toast.error(LOGIN_AGAIN_PROMPT);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  const handleGetParticipationList = () => {
    const token = Cookies.get('token');
    if (token === undefined) {
      logout();
      return;
    }
    AdminService.getParticipationList(token, events[selectedEventID]['id'])
      .then((data) => {
        if (data['success']) {
          toast.success('Downloaded List of Participating Teams Successfully');

          let arr = data['participation'];
          arr = [Object.keys(arr[0])].concat(arr);

          const csv = arr
            .map((it: any) => {
              return Object.values(it).toString();
            })
            .join('\n');

          let el = document.createElement('a');
          el.download = `${events[selectedEventID]['name']}_teams.csv`;
          el.href = URL.createObjectURL(new Blob([csv]));
          el.click();
        } else if (data['message'] === 'Invalid token!') {
          closePopup();
          logout();
          toast.error(LOGIN_AGAIN_PROMPT);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };

  const handleSelectDept = (i: any) => {
    setTab('Events');
    setSelectedDeptID(i);
  };

  const handleSelectEvent = (i: number) => {
    setTab('Event');
    setEventSection(0);
    setSelectedEventID(i);
  };

  const handleGoBack = () => {
    if (tab === 'Event') setTab('Events');
    else if (tab === 'Events') setTab('Departments');
    else closePopup();
  };

  return (
    <>
      {loading && <div className="flex items-center justify-center">Loading...</div>}
      {!loading && (
        <div className="absolute top-0 left-0 w-screen h-screen scale-95 bg-zinc-900 rounded-3xl">
          {/* Front Camera */}
          <div className="absolute top-[50vh] left-[2.5%] rounded-full bg-zinc-800 w-3 h-3" />
          <div className="absolute top-[50.5vh] left-[2.7%] rounded-full bg-blue-900 w-1 h-1" />

          {/* Home Button */}
          <div
            className="absolute top-[48.5vh] right-[1.5%] cursor-pointer rounded-full bg-zinc-800 w-10 h-10"
            onClick={handleGoBack}
          />
          <div
            className="absolute top-[49.8vh] right-[2.1%] cursor-pointer rounded-sm border-slate-400 border-2 w-5 h-5"
            onClick={handleGoBack}
          />

          {/* Background Image */}
          {tab !== 'Profile' && tab !== 'Event' && (
            <div
              className="absolute top-[5vh] left-[5%] w-[90%] bg-cover bg-no-repeat bg-center blur brightness-75 h-[90vh] text-[50px] rounded-md"
              style={{ backgroundImage: `url(${tabletBg})` }}
            />
          )}

          <div className="absolute top-[5vh] left-[5%] w-[90%] bg-cover bg-no-repeat bg-center h-[90vh] text-[50px] text-gray-200 rounded-md border-zinc-900">
            {tab === 'Team' && (
              <div className="h-full overflow-scroll no-scroll">
                <TeamAvishkar />
              </div>
            )}
            {tab === 'Sponsors' && (
              <div className="h-full overflow-scroll no-scroll">
                <Sponsors />
              </div>
            )}
            {tab === 'Departments' && (
              <div className="flex flex-col h-full">
                <h1 className="mt-10 mb-3 text-3xl text-center">Departments</h1>
                <div className="flex flex-wrap items-center justify-center flex-1">
                  {Object.keys(departments).map((department, i) => (
                    <button
                      key={department}
                      className="flex flex-col items-center m-2 mx-6 cursor-default w-36 h-1/3"
                      onClick={() => handleSelectDept(department)}>
                      <div className="flex flex-wrap justify-around w-40 h-40 rounded-xl pt-2 bg-zinc-800/[0.4] shadow-md">
                        {[0, 1, 2, 3].map((j) => (
                          <img
                            key={`${department}-${j}`}
                            className="w-16 h-16 m-1 cursor-pointer rounded-xl shrink-0"
                            src={`/event-icons/${APP_ICONS[(i * 4 + j) % APP_ICONS.length]}`}
                          />
                        ))}
                      </div>
                      <span className="text-lg font-bold">{departments[department]['name']}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
            {tab === 'Events' && selectedDeptID !== -1 && (
              <div className="flex flex-col h-full">
                <h1 className="mt-10 text-3xl text-center">
                  {departments[selectedDeptID]['name']}
                </h1>
                <p className="mt-3 text-xl italic text-center">
                  {departments[selectedDeptID]['desc']}
                </p>
                <div className="flex flex-wrap items-center justify-center flex-1 my-4 overflow-y-auto">
                  {events.map((event, i) => (
                    <button
                      key={event['id']}
                      className="flex flex-col items-center m-2 w-36 h-1/3"
                      onClick={() => handleSelectEvent(i)}>
                      <img
                        className="w-20 h-20 m-1 rounded-xl shrink-0"
                        src={`/event-icons/${APP_ICONS[i % APP_ICONS.length]}`}
                      />
                      <span className="text-sm font-bold">{event['name']}</span>
                    </button>
                  ))}
                </div>
                {deptCoordies.length !== 0 && (
                  <div className="relative flex flex-nowrap flex-col rounded-xl items-center justify-center overflow-x-auto bg-zinc-800/[0.4] w-[90%] p-1 mx-auto">
                    <h2 className="my-1 text-xl font-bold">Department Coordinators</h2>
                    <div
                      key={deptCoordies[currDCIndex]['user']['id']}
                      className="flex-none w-1/3 text-sm text-gray-200 rounded-lg bg-zinc-800/[0.8] mx-4 mb-1">
                      <p className="flex justify-between px-2 py-2 border-gray-500">
                        <span>Name</span>
                        <span>{deptCoordies[currDCIndex]['user']['name']}</span>
                      </p>
                      <p className="flex justify-between px-2 py-2 border-zinc-800/[0.8]">
                        <span>Email</span>
                        <span>{deptCoordies[currDCIndex]['user']['email']}</span>
                      </p>
                      <p className="flex justify-between px-2 py-2 border-zinc-800/[0.8]">
                        <span>Mobile</span>
                        <span>{deptCoordies[currDCIndex]['user']['mobile']}</span>
                      </p>
                    </div>
                    {deptCoordies.length > 1 && (
                      <>
                        <button
                          type="button"
                          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                          onClick={() =>
                            setCurrDCIndex(
                              (currDCIndex - 1 + deptCoordies.length) % deptCoordies.length
                            )
                          }>
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg
                              aria-hidden="true"
                              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 19l-7-7 7-7"></path>
                            </svg>
                            <span className="sr-only">Previous</span>
                          </span>
                        </button>
                        <button
                          type="button"
                          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                          onClick={() => setCurrDCIndex((currDCIndex + 1) % deptCoordies.length)}>
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg
                              aria-hidden="true"
                              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"></path>
                            </svg>
                            <span className="sr-only">Next</span>
                          </span>
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            )}
            {tab === 'Event' && selectedEventID !== -1 && (
              <div className="flex h-full text-gray-200">
                <div className="w-1/3 bg-black border-r-2 border-zinc-900 rounded-l-md">
                  <h1 className="pl-5 mt-5 font-bold">{events[selectedEventID]['name']}</h1>
                  <p className="px-5 py-1 mt-5 text-2xl font-bold uppercase">Details</p>
                  <p
                    className={
                      eventSection === 0
                        ? 'text-gray-200 bg-blue-900 cursor-pointer px-5 py-1 text-2xl'
                        : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                    }
                    onClick={() => setEventSection(0)}>
                    Home
                  </p>
                  <p
                    className={
                      eventSection === 1
                        ? 'text-gray-200 bg-blue-900 cursor-pointer px-5 py-1 text-2xl'
                        : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                    }
                    onClick={() => setEventSection(1)}>
                    About
                  </p>
                  <p
                    className={
                      eventSection === 2
                        ? 'text-gray-200 bg-blue-900 cursor-pointer px-5 py-1 text-2xl'
                        : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                    }
                    onClick={() => setEventSection(2)}>
                    Participation Criteria
                  </p>
                  <p
                    className={
                      eventSection === 3
                        ? 'text-gray-200 bg-blue-900 cursor-pointer px-5 py-1 text-2xl'
                        : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                    }
                    onClick={() => setEventSection(3)}>
                    Rules
                  </p>
                  <p className="px-5 py-1 mt-5 text-2xl font-bold uppercase">Organisers</p>
                  <p
                    className={
                      eventSection === 5
                        ? 'text-gray-200 bg-blue-900 cursor-pointer px-5 py-1 text-2xl'
                        : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                    }
                    onClick={() => setEventSection(5)}>
                    Event Coordinators
                  </p>
                  {sponsors.length !== 0 && (
                    <p
                      className={
                        eventSection === 6
                          ? 'text-gray-200 bg-blue-900 cursor-pointer px-5 py-1 text-2xl'
                          : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                      }
                      onClick={() => setEventSection(6)}>
                      Event Sponsors
                    </p>
                  )}
                  {(events[selectedEventID]['psLink'] !== '#' ||
                    events[selectedEventID]['name'] === 'Webster' ||
                    Cookies.get('token') !== undefined) && (
                    <p className="px-5 py-1 mt-5 text-2xl font-bold uppercase">Participate</p>
                  )}
                  {events[selectedEventID]['psLink'] !== '#' && (
                    <p
                      className="px-5 py-1 text-2xl text-gray-200 bg-blue-900 cursor-pointer"
                      onClick={() => window.open(events[selectedEventID]['psLink'], '_blank')}>
                      Problem Statement
                    </p>
                  )}
                  {Cookies.get('token') !== undefined && (
                    <p
                      className={
                        eventSection === 4
                          ? 'text-gray-200 bg-blue-900 cursor-pointer px-5 py-1 text-2xl'
                          : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                      }
                      onClick={() => setEventSection(4)}>
                      {participatingTeam === null ? 'Register' : 'Registered'}
                    </p>
                  )}
                  {events[selectedEventID]['name'] === 'Webster' && (
                    <div
                      className="apply-button h-[44px] w-[312px] mx-auto my-5"
                      data-hackathon-slug="CyberQuest"
                      data-button-theme="light"></div>
                  )}
                  {userDetails['role'] !== 'USER' && (
                    <>
                      <p className="px-5 py-1 mt-5 text-2xl font-bold uppercase">Admin</p>
                      <p
                        className="px-5 py-1 text-2xl text-gray-200 bg-blue-900 cursor-pointer"
                        onClick={() => handleGetParticipationList()}>
                        Get Participation List
                      </p>
                    </>
                  )}
                </div>
                <div className="relative flex flex-col w-2/3 bg-black rounded-r-md">
                  <div className="absolute top-0 left-0 flex flex-col w-full border-b-2 bg-zinc-900 border-zinc-900 h-1/6 ">
                    <h2 className="flex-1 mt-5 text-lg font-bold text-center">
                      {departments[selectedDeptID]['name']}
                    </h2>
                    <div className="w-[90%] mx-auto bg-zinc-800/[0.4] h-7 rounded-md mb-4"></div>
                  </div>
                  {eventSection === 0 && (
                    <div>
                      <p className="text-3xl italic text-center mt-[45vh] translate-y-[-50%]">
                        {events[selectedEventID]['tagline']}
                      </p>
                    </div>
                  )}
                  {eventSection === 1 && (
                    <div className="mt-[15vh] overflow-y-auto">
                      <p
                        className="m-5 text-3xl"
                        dangerouslySetInnerHTML={{ __html: events[selectedEventID]['details'] }}
                      />
                    </div>
                  )}
                  {eventSection === 2 && (
                    <div className="mt-[15vh] overflow-y-auto">
                      <p
                        className="m-5 text-3xl"
                        dangerouslySetInnerHTML={{ __html: events[selectedEventID]['criteria'] }}
                      />
                    </div>
                  )}
                  {eventSection === 3 && (
                    <div className="mt-[15vh] overflow-y-auto">
                      <p
                        className="m-5 text-3xl"
                        dangerouslySetInnerHTML={{ __html: events[selectedEventID]['rules'] }}
                      />
                    </div>
                  )}
                  {eventSection === 4 &&
                    participatingTeam === null &&
                    teams.filter(
                      (team) =>
                        team['team']['leader'] === userDetails['id'] &&
                        events[selectedEventID]['minTeamSize'] <= team['team']['size'] &&
                        team['team']['size'] <= events[selectedEventID]['maxTeamSize']
                    ).length === 0 && (
                      <div>
                        <p className="text-3xl text-center mt-[45vh] translate-y-[-50%] px-4">
                          To register for the event, either create a team, invite members (within
                          team size constraints) and register for the event or join a team and tell
                          the leader to register for the event
                        </p>
                      </div>
                    )}
                  {eventSection === 4 &&
                    participatingTeam === null &&
                    teams.filter(
                      (team) =>
                        team['team']['leader'] === userDetails['id'] &&
                        events[selectedEventID]['minTeamSize'] <= team['team']['size'] &&
                        team['team']['size'] <= events[selectedEventID]['maxTeamSize']
                    ).length !== 0 && (
                      <div className="mt-[15vh] overflow-y-auto">
                        {teams
                          .filter((team) => team['team']['leader'] === userDetails['id'])
                          .map((team) => (
                            <div
                              key={team['team']['id']}
                              className="relative m-5 text-sm text-gray-200 rounded-lg border-zinc-800 bg-zinc-900">
                              <p className="flex justify-between px-2 py-2 border-gray-500">
                                <span>Name</span>
                                <span>{team['team']['name']}</span>
                              </p>
                              <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                                <span>Number of members</span>
                                <span>{team['team']['size']}</span>
                              </p>
                              <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                                <span>
                                  {(teamMembers[team['team']['id']] as any).length === 0
                                    ? 'View all members'
                                    : 'Members'}
                                </span>
                                <span>
                                  {(teamMembers[team['team']['id']] as any).length === 0 && (
                                    <div
                                      className="w-3 h-3 mr-2 rotate-45 border-b-2 border-r-2 border-blue-900 cursor-pointer"
                                      onClick={() => fetchTeamMembers(team['team']['id'])}
                                    />
                                  )}
                                </span>
                              </p>
                              {(teamMembers[team['team']['id']] as any).map(
                                (teamMember: any, i: number) => (
                                  <p
                                    key={teamMember['userId']}
                                    className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                                    <span>
                                      &emsp;&emsp;{i + 1}. {teamMember['user']['name']}{' '}
                                      {teamMember['user']['id'] === team['team']['leader']
                                        ? '(Leader)'
                                        : teamMember['status'] === 'ACCEPTED'
                                        ? ''
                                        : '(Invitation Pending)'}
                                    </span>
                                  </p>
                                )
                              )}
                              <p
                                className="w-full px-2 py-2 text-center text-blue-900 border-t-2 cursor-pointer border-zinc-800"
                                onClick={() =>
                                  handleParticipate(
                                    team['team']['id'],
                                    events[selectedEventID]['id']
                                  )
                                }>
                                Participate
                              </p>
                            </div>
                          ))}
                      </div>
                    )}
                  {eventSection === 4 &&
                    participatingTeam !== null &&
                    participatingTeam['leader'] === userDetails['id'] && (
                      <div className="mt-[15vh] overflow-y-auto">
                        {
                          <div
                            key={participatingTeam['id']}
                            className="relative m-5 text-sm text-gray-200 rounded-lg border-zinc-800 bg-zinc-900">
                            <p className="flex justify-between px-2 py-2 border-gray-500">
                              <span>Name</span>
                              <span>{participatingTeam['name']}</span>
                            </p>
                            <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                              <span>Number of members</span>
                              <span>{participatingTeam['size']}</span>
                            </p>
                            <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                              <span>
                                {(teamMembers[participatingTeam['id']] as any).length === 0
                                  ? 'View all members'
                                  : 'Members'}
                              </span>
                              <span>
                                {(teamMembers[participatingTeam['id']] as any).length === 0 && (
                                  <div
                                    className="w-3 h-3 mr-2 rotate-45 border-b-2 border-r-2 border-blue-900 cursor-pointer"
                                    onClick={() => fetchTeamMembers(participatingTeam['id'])}
                                  />
                                )}
                              </span>
                            </p>
                            {(teamMembers[participatingTeam['id']] as any).map(
                              (teamMember: any, i: number) => (
                                <p
                                  key={teamMember['userId']}
                                  className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                                  <span>
                                    &emsp;&emsp;{i + 1}. {teamMember['user']['name']}{' '}
                                    {teamMember['user']['id'] === participatingTeam['leader']
                                      ? '(Leader)'
                                      : teamMember['status'] === 'ACCEPTED'
                                      ? ''
                                      : '(Invitation Pending)'}
                                  </span>
                                </p>
                              )
                            )}
                            <p
                              className="w-full px-2 py-2 text-center text-blue-900 border-t-2 cursor-pointer border-zinc-800"
                              onClick={() =>
                                handleUnparticipate(
                                  participatingTeam['id'],
                                  events[selectedEventID]['id']
                                )
                              }>
                              Unparticipate
                            </p>
                          </div>
                        }
                      </div>
                    )}
                  {eventSection === 4 &&
                    participatingTeam !== null &&
                    participatingTeam['leader'] !== userDetails['id'] && (
                      <div className="mt-[15vh] overflow-y-auto">
                        {
                          <div
                            key={participatingTeam['id']}
                            className="relative m-5 text-sm text-gray-200 rounded-lg border-zinc-800 bg-zinc-900">
                            <p className="flex justify-between px-2 py-2">
                              <span>Name</span>
                              <span>{participatingTeam['name']}</span>
                            </p>
                            <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                              <span>Number of members</span>
                              <span>{participatingTeam['size']}</span>
                            </p>
                            <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                              <span>
                                {(teamMembers[participatingTeam['id']] as any).length === 0
                                  ? 'View all members'
                                  : 'Members'}
                              </span>
                              <span>
                                {(teamMembers[participatingTeam['id']] as any).length === 0 && (
                                  <div
                                    className="w-3 h-3 mr-2 rotate-45 border-b-2 border-r-2 border-blue-900 cursor-pointer"
                                    onClick={() => fetchTeamMembers(participatingTeam['id'])}
                                  />
                                )}
                              </span>
                            </p>
                            {(teamMembers[participatingTeam['id']] as any).map(
                              (teamMember: any, i: number) => (
                                <p
                                  key={teamMember['userId']}
                                  className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                                  <span>
                                    &emsp;&emsp;{i + 1}. {teamMember['user']['name']}{' '}
                                    {teamMember['user']['id'] === participatingTeam['leader']
                                      ? '(Leader)'
                                      : teamMember['status'] === 'ACCEPTED'
                                      ? ''
                                      : '(Invitation Pending)'}
                                  </span>
                                </p>
                              )
                            )}
                          </div>
                        }
                      </div>
                    )}
                  {eventSection === 5 && (
                    <div className="overflow-y-auto mt-[15vh]">
                      {eventCoordies.map((eventCoordie) => (
                        <div
                          key={eventCoordie['user']['id']}
                          className="m-5 text-sm text-gray-200 rounded-lg bg-zinc-900">
                          <p className="flex justify-between px-2 py-2">
                            <span>Name</span>
                            <span>{eventCoordie['user']['name']}</span>
                          </p>
                          <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                            <span>Email</span>
                            <span>{eventCoordie['user']['email']}</span>
                          </p>
                          <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                            <span>Mobile</span>
                            <span>{eventCoordie['user']['mobile']}</span>
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                  {eventSection === 6 && (
                    <div className="overflow-y-auto mt-[15vh]">
                      {sponsors.filter((sponsor) => sponsor['title']).length !== 0 && (
                        <div className="my-5 text-3xl font-bold text-center">Title Sponsors</div>
                      )}
                      {sponsors
                        .filter((sponsor) => sponsor['title'])
                        .map((sponsor) => (
                          <div
                            key={sponsor['name']}
                            className="flex flex-col m-5 text-sm text-gray-200 rounded-lg max-w-[30%] mx-auto items-center bg-zinc-900">
                            <img src={sponsor['poster']} />
                            <p className="flex justify-between px-2 py-2 text-lg">
                              <span>{sponsor['name']}</span>
                            </p>
                          </div>
                        ))}
                      {sponsors.filter((sponsor) => !sponsor['title']).length !== 0 && (
                        <div className="my-5 text-3xl font-bold text-center">Sponsors</div>
                      )}
                      {sponsors
                        .filter((sponsor) => !sponsor['title'])
                        .map((sponsor) => (
                          <div
                            key={sponsor['name']}
                            className="flex flex-col m-5 text-sm text-gray-200 rounded-lg max-w-[30%] mx-auto items-center bg-zinc-900">
                            <img src={sponsor['poster']} />
                            <p className="flex justify-between px-2 py-2 text-lg">
                              <span>{sponsor['name']}</span>
                            </p>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            )}
            {tab === 'Profile' && (
              <div className="flex h-full text-gray-200">
                <div className="w-1/3 bg-black border-r-2 border-zinc-900 rounded-l-md">
                  <div className="mx-5 mt-5">
                    <div className="flex w-full p-3 rounded-md border-zinc-800 bg-zinc-900">
                      <img className="w-20 h-20 m-1 rounded-full shrink-0" src={defaultPfp} />
                      <div className="flex flex-col justify-center ml-3">
                        <h2 className="text-2xl">{userDetails['name']}</h2>
                        <p className="text-lg ">{userDetails['username']}</p>
                      </div>
                    </div>
                  </div>
                  <div className="overflow-y-auto h-[70vh] mt-4">
                    <p className="px-5 py-1 mt-5 text-2xl font-bold uppercase">Details</p>
                    <p
                      className={
                        profileSection === 0
                          ? 'text-gray-200 bg-blue-900 cursor-pointer px-5 py-1 text-2xl'
                          : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                      }
                      onClick={() => setProfileSection(0)}>
                      View
                    </p>
                    <p
                      className={
                        profileSection === 1
                          ? 'text-gray-200 bg-blue-900 cursor-pointer px-5 py-1 text-2xl'
                          : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                      }
                      onClick={() => setProfileSection(1)}>
                      Edit
                    </p>
                    <p className="px-5 py-1 mt-5 text-2xl font-bold uppercase">Team</p>
                    <p
                      className={
                        profileSection === 2
                          ? 'text-gray-200 bg-blue-900 cursor-pointer px-5 py-1 text-2xl'
                          : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                      }
                      onClick={() => setProfileSection(2)}>
                      View
                    </p>
                    <p
                      className={
                        profileSection === 3
                          ? 'text-gray-200 bg-blue-900 cursor-pointer px-5 py-1 text-2xl'
                          : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                      }
                      onClick={() => setProfileSection(3)}>
                      Manage
                    </p>
                    <p
                      className={
                        profileSection === 4
                          ? 'text-gray-200 bg-blue-900 cursor-pointer px-5 py-1 text-2xl'
                          : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                      }
                      onClick={() => setProfileSection(4)}>
                      Invitations
                    </p>
                    {userDetails['role'] !== 'USER' && (
                      <p className="px-5 py-1 mt-5 text-2xl font-bold uppercase">Admin</p>
                    )}
                    {userDetails['role'] === 'ADMIN' && (
                      <>
                        <p
                          className={
                            profileSection === 5
                              ? 'text-gray-200 bg-blue-900 cursor-pointer px-5 py-1 text-2xl'
                              : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                          }
                          onClick={() => setProfileSection(5)}>
                          Add Department Event
                        </p>
                        <p
                          className={
                            profileSection === 6
                              ? 'text-gray-200 bg-blue-900 cursor-pointer px-5 py-1 text-2xl'
                              : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                          }
                          onClick={() => setProfileSection(6)}>
                          Delete Department Event
                        </p>
                        <p
                          className={
                            profileSection === 7
                              ? 'text-gray-200 bg-blue-900 cursor-pointer px-5 py-1 text-2xl'
                              : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                          }
                          onClick={() => setProfileSection(7)}>
                          Add Department Coordinator
                        </p>
                        <p
                          className={
                            profileSection === 8
                              ? 'text-gray-200 bg-blue-900 cursor-pointer px-5 py-1 text-2xl'
                              : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                          }
                          onClick={() => setProfileSection(8)}>
                          Delete Department Coordinator
                        </p>
                      </>
                    )}
                    {userDetails['role'] !== 'USER' && (
                      <>
                        <p
                          className={
                            profileSection === 9
                              ? 'text-gray-200 bg-blue-900 cursor-pointer px-5 py-1 text-2xl'
                              : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                          }
                          onClick={() => setProfileSection(9)}>
                          Add Event
                        </p>
                        <p
                          className={
                            profileSection === 10
                              ? 'text-gray-200 bg-blue-900 cursor-pointer px-5 py-1 text-2xl'
                              : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                          }
                          onClick={() => setProfileSection(10)}>
                          Update Event
                        </p>
                        <p
                          className={
                            profileSection === 11
                              ? 'text-gray-200 bg-blue-900 cursor-pointer px-5 py-1 text-2xl'
                              : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                          }
                          onClick={() => setProfileSection(11)}>
                          Delete Event
                        </p>
                        <p
                          className={
                            profileSection === 12
                              ? 'text-gray-200 bg-blue-900 cursor-pointer px-5 py-1 text-2xl'
                              : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                          }
                          onClick={() => setProfileSection(12)}>
                          Add Event Coordinator
                        </p>
                        <p
                          className={
                            profileSection === 13
                              ? 'text-gray-200 bg-blue-900 cursor-pointer px-5 py-1 text-2xl'
                              : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                          }
                          onClick={() => setProfileSection(13)}>
                          Delete Event Coordinator
                        </p>
                        <p
                          className={
                            profileSection === 14
                              ? 'text-gray-200 bg-blue-900 cursor-pointer px-5 py-1 text-2xl'
                              : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                          }
                          onClick={() => setProfileSection(14)}>
                          Add Event Sponsor
                        </p>
                        <p
                          className={
                            profileSection === 15
                              ? 'text-gray-200 bg-blue-900 cursor-pointer px-5 py-1 text-2xl'
                              : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                          }
                          onClick={() => setProfileSection(15)}>
                          Update Event Sponsor
                        </p>
                        <p
                          className={
                            profileSection === 16
                              ? 'text-gray-200 bg-blue-900 cursor-pointer px-5 py-1 text-2xl'
                              : 'px-5 py-1 text-2xl w-[95%] cursor-pointer'
                          }
                          onClick={() => setProfileSection(16)}>
                          Delete Event Sponsor
                        </p>
                      </>
                    )}
                  </div>
                </div>
                <div className="relative flex flex-col w-2/3 bg-black rounded-r-md">
                  {profileSection === 0 && (
                    <div className="m-5 text-sm text-gray-200 rounded-lg border-zinc-800 bg-zinc-900">
                      <p className="flex justify-between px-2 py-2">
                        <span>Name</span>
                        <span>{userDetails['name']}</span>
                      </p>
                      <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                        <span>Username</span>
                        <span>{userDetails['username']}</span>
                      </p>
                      <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                        <span>College</span>
                        <span>{userDetails['collegeName']}</span>
                      </p>
                      <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                        <span>Mobile</span>
                        <span>{userDetails['mobile']}</span>
                      </p>
                      <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                        <span>Resume Link</span>
                        <span>{userDetails['resumeLink']}</span>
                      </p>
                      <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                        <span>Email</span>
                        <span>{userDetails['email']}</span>
                      </p>
                      <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                        <span>Score</span>
                        <span>{userDetails['score']}</span>
                      </p>
                      {/* <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                      <span>Gender</span>
                      <span>
                        {userDetails['gender']
                          ? userDetails['gender'].charAt(0).toUpperCase() +
                            userDetails['gender'].slice(1)
                          : ''}
                      </span>
                    </p> */}
                      <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                        <span>Fee Status</span>
                        <span>{userDetails['isFeePaid'] ? 'PAID' : 'NOT PAID'}</span>
                      </p>
                    </div>
                  )}
                  {profileSection === 1 && (
                    <>
                      <div className="m-5 text-sm text-gray-200 rounded-lg bg-zinc-900 border-zinc-800">
                        {/* <p className="flex justify-between px-2 py-2 border-gray-500">
                        <span>Name</span>
                        <input
                          placeholder="Enter your name"
                          className="flex-1 ml-1 text-right outline-none"
                          value={newUserDetails['name']}
                          onChange={(e) =>
                            setNewUserDetails({ ...newUserDetails, name: e.target.value })
                          }
                        />
                      </p> */}
                        {/* <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                        <span>Username</span>
                        <input
                          placeholder="Enter your username"
                          className="flex-1 ml-1 text-right outline-none"
                          value={newUserDetails['username']}
                          onChange={(e) =>
                            setNewUserDetails({ ...newUserDetails, username: e.target.value })
                          }
                        />
                      </p> */}
                        {/* <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                        <span>College</span>
                        <input
                          placeholder="Enter your college name"
                          className="flex-1 ml-1 text-right outline-none"
                          value={newUserDetails['collegeName']}
                          onChange={(e) =>
                            setNewUserDetails({ ...newUserDetails, collegeName: e.target.value })
                          }
                        />
                      </p> */}
                        {/* <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                        <span>Mobile</span>
                        <input
                          placeholder="Enter your mobile"
                          className="flex-1 ml-1 text-right outline-none"
                          value={newUserDetails['mobile']}
                          onChange={(e) =>
                            setNewUserDetails({ ...newUserDetails, mobile: e.target.value })
                          }
                        />
                      </p> */}
                        {/* <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800"> */}
                        <p className="flex justify-between px-2 py-2 border-zinc-800">
                          <span>Resume Link</span>
                          <input
                            placeholder="Enter your resumeLink"
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={newUserDetails['resumeLink']}
                            onChange={(e) =>
                              setNewUserDetails({ ...newUserDetails, resumeLink: e.target.value })
                            }
                          />
                        </p>
                      </div>
                      <div
                        className="m-5 text-sm text-gray-200 rounded-lg cursor-pointer bg-zinc-900 border-zinc-800"
                        onClick={() => handleEditDetails()}>
                        <p className="w-full px-2 py-2 text-center text-blue-900">Submit</p>
                      </div>
                    </>
                  )}
                  {profileSection === 2 &&
                    teams.filter((team) => team['status'] === 'ACCEPTED').length === 0 && (
                      <div>
                        <p className="text-3xl text-center mt-[45vh] translate-y-[-50%]">
                          You are not part of any team!
                        </p>
                      </div>
                    )}
                  {profileSection === 2 &&
                    teams.filter((team) => team['status'] === 'ACCEPTED').length !== 0 && (
                      <div className="overflow-y-auto">
                        {teams
                          .filter((team) => team['status'] === 'ACCEPTED')
                          .map((team) => (
                            <div
                              key={team['team']['id']}
                              className="m-5 text-sm text-gray-200 rounded-lg bg-zinc-900 border-zinc-800">
                              <p className="flex justify-between px-2 py-2 border-gray-500">
                                <span>Name</span>
                                <span>{team['team']['name']}</span>
                              </p>
                              <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                                <span>Number of members</span>
                                <span>{team['team']['size']}</span>
                              </p>
                              <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                                <span>
                                  {(teamMembers[team['team']['id']] as any).length === 0
                                    ? 'View all members'
                                    : 'Members'}
                                </span>
                                <span>
                                  {(teamMembers[team['team']['id']] as any).length === 0 && (
                                    <div
                                      className="w-3 h-3 mr-2 rotate-45 border-b-2 border-r-2 border-blue-900 cursor-pointer"
                                      onClick={() => fetchTeamMembers(team['team']['id'])}
                                    />
                                  )}
                                </span>
                              </p>
                              {(teamMembers[team['team']['id']] as any).map(
                                (teamMember: any, i: number) => (
                                  <p
                                    key={teamMember['userId']}
                                    className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                                    &emsp;&emsp;{i + 1}. {teamMember['user']['name']}{' '}
                                    {teamMember['user']['id'] === team['team']['leader']
                                      ? '(Leader)'
                                      : teamMember['status'] === 'ACCEPTED'
                                      ? ''
                                      : '(Invitation Pending)'}
                                  </p>
                                )
                              )}
                            </div>
                          ))}
                      </div>
                    )}
                  {profileSection === 3 && (
                    <div className="overflow-y-auto">
                      {teams
                        .filter((team) => team['team']['leader'] === userDetails['id'])
                        .map((team) => (
                          <div
                            key={team['team']['id']}
                            className="relative m-5 text-sm text-gray-200 rounded-lg bg-zinc-900 border-zinc-800">
                            <p className="flex justify-between px-2 py-2 border-gray-500">
                              <span>Name</span>
                              {!showUpdateTeamnames[team['team']['id']] && (
                                <span>{team['team']['name']}</span>
                              )}
                              {showUpdateTeamnames[team['team']['id']] && (
                                <input
                                  placeholder="Enter new name for team"
                                  className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                                  value={updateTeamnames[team['team']['id']]}
                                  onChange={(e) =>
                                    setUpdateTeamnames({
                                      ...updateTeamnames,
                                      [team['team']['id']]: e.target.value
                                    })
                                  }
                                />
                              )}
                            </p>
                            <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                              <span>Number of members</span>
                              <span>{team['team']['size']}</span>
                            </p>
                            <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                              <span>
                                {(teamMembers[team['team']['id']] as any).length === 0
                                  ? 'View all members'
                                  : 'Members'}
                              </span>
                              <span>
                                {(teamMembers[team['team']['id']] as any).length === 0 && (
                                  <div
                                    className="w-3 h-3 mr-2 rotate-45 border-b-2 border-r-2 border-blue-900 cursor-pointer"
                                    onClick={() => fetchTeamMembers(team['team']['id'])}
                                  />
                                )}
                              </span>
                            </p>
                            {(teamMembers[team['team']['id']] as any).map(
                              (teamMember: any, i: number) => (
                                <p
                                  key={teamMember['userId']}
                                  className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                                  <span>
                                    &emsp;&emsp;{i + 1}. {teamMember['user']['name']}{' '}
                                    {teamMember['user']['id'] === team['team']['leader']
                                      ? '(Leader)'
                                      : teamMember['status'] === 'ACCEPTED'
                                      ? ''
                                      : '(Invitation Pending)'}
                                  </span>
                                  {teamMember['user']['id'] !== team['team']['leader'] && (
                                    <span
                                      className="mr-2 text-red-800 cursor-pointer"
                                      onClick={() =>
                                        handleRemoveMember(
                                          team['team']['id'],
                                          teamMember['user']['id']
                                        )
                                      }>
                                      X
                                    </span>
                                  )}
                                </p>
                              )
                            )}
                            {showInviteUsernames[team['team']['id']] && (
                              <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                                <span>Invite User</span>
                                <input
                                  placeholder="Enter username of user you want to invite"
                                  className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                                  value={inviteUsernames[team['team']['id']]}
                                  onChange={(e) =>
                                    setInviteUsernames({
                                      ...inviteUsernames,
                                      [team['team']['id']]: e.target.value
                                    })
                                  }
                                />
                              </p>
                            )}
                            <p
                              className="w-full px-2 py-2 text-center text-blue-900 border-t-2 cursor-pointer border-zinc-800"
                              onClick={() => handleInviteUser(team['team']['id'])}>
                              Invite User
                            </p>
                            <p
                              className="w-full px-2 py-2 text-center text-blue-900 border-t-2 cursor-pointer border-zinc-800"
                              onClick={() => handleUpdateTeam(team['team']['id'])}>
                              Change Team Name
                            </p>
                            <p
                              className="w-full px-2 py-2 text-center text-red-800 border-t-2 cursor-pointer border-zinc-800"
                              onClick={() => handleDeleteTeam(team['team']['id'])}>
                              Delete Team
                            </p>
                          </div>
                        ))}
                      <div
                        className="m-5 text-sm text-gray-200 rounded-lg cursor-pointer bg-zinc-900 border-zinc-800"
                        onClick={() => handleCreateTeam()}>
                        <p className="w-full px-2 py-2 text-center text-blue-900">Create Team</p>
                      </div>
                    </div>
                  )}
                  {profileSection === 4 &&
                    teams.filter((team) => team['status'] !== 'ACCEPTED').length === 0 && (
                      <div>
                        <p className="text-3xl text-center mt-[45vh] translate-y-[-50%]">
                          You do not have any invitations!
                        </p>
                      </div>
                    )}
                  {profileSection === 4 &&
                    teams.filter((team) => team['status'] !== 'ACCEPTED').length !== 0 && (
                      <div className="overflow-y-auto">
                        {teams
                          .filter((team) => team['status'] !== 'ACCEPTED')
                          .map((team) => (
                            <div
                              key={team['team']['id']}
                              className="m-5 text-sm text-gray-200 rounded-lg bg-zinc-900 border-zinc-800">
                              <p className="flex justify-between px-2 py-2 border-gray-500">
                                <span>Name</span>
                                <span>{team['team']['name']}</span>
                              </p>
                              <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                                <span>Number of members</span>
                                <span>{team['team']['size']}</span>
                              </p>
                              <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                                <span>
                                  {(teamMembers[team['team']['id']] as any).length === 0
                                    ? 'View all members'
                                    : 'Members'}
                                </span>
                                <span>
                                  {(teamMembers[team['team']['id']] as any).length === 0 && (
                                    <div
                                      className="w-3 h-3 mr-2 rotate-45 border-b-2 border-r-2 border-blue-900 cursor-pointer"
                                      onClick={() => fetchTeamMembers(team['team']['id'])}
                                    />
                                  )}
                                </span>
                              </p>
                              {(teamMembers[team['team']['id']] as any)
                                .filter((teamMember: any) => teamMember['status'] === 'ACCEPTED')
                                .map((teamMember: any, i: number) => (
                                  <p
                                    key={teamMember['userId']}
                                    className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                                    &emsp;&emsp;{i + 1}. {teamMember['user']['name']}{' '}
                                    {teamMember['user']['id'] === team['team']['leader']
                                      ? '(Leader)'
                                      : ''}
                                  </p>
                                ))}
                              <p
                                className="w-full px-2 py-2 text-center text-blue-900 border-t-2 cursor-pointer border-zinc-800"
                                onClick={() =>
                                  handleRespondTeamInvite(team['team']['id'], 'ACCEPTED')
                                }>
                                Accept Invitation
                              </p>
                              <p
                                className="w-full px-2 py-2 text-center text-red-800 border-t-2 cursor-pointer border-zinc-800"
                                onClick={() =>
                                  handleRespondTeamInvite(team['team']['id'], 'DECLINED')
                                }>
                                Reject Invitation
                              </p>
                            </div>
                          ))}
                      </div>
                    )}
                  {profileSection === 5 && (
                    <>
                      <div className="m-5 text-sm text-gray-200 rounded-lg border-zinc-800 bg-zinc-900">
                        <p className="flex justify-between px-2 py-2 border-zinc-800">
                          <span>Name</span>
                          <input
                            placeholder="Enter department name"
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={newDeptEvent['name']}
                            onChange={(e) =>
                              setNewDeptEvent({ ...newDeptEvent, name: e.target.value })
                            }
                          />
                        </p>
                        <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                          <span>Organizer</span>
                          <input
                            placeholder="Enter department organizer"
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={newDeptEvent['organizer']}
                            onChange={(e) =>
                              setNewDeptEvent({ ...newDeptEvent, organizer: e.target.value })
                            }
                          />
                        </p>
                        <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                          <span>Description</span>
                          <input
                            placeholder="Enter department description"
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={newDeptEvent['desc']}
                            onChange={(e) =>
                              setNewDeptEvent({ ...newDeptEvent, desc: e.target.value })
                            }
                          />
                        </p>
                      </div>
                      <div
                        className="m-5 text-sm text-gray-200 rounded-lg cursor-pointer border-zinc-800 bg-zinc-900"
                        onClick={() =>
                          handleAddDepartmentEvent(
                            newDeptEvent['name'],
                            newDeptEvent['organizer'],
                            newDeptEvent['desc']
                          )
                        }>
                        <p className="w-full px-2 py-2 text-center text-blue-900">
                          Create Department Event
                        </p>
                      </div>
                    </>
                  )}
                  {profileSection === 6 && (
                    <div className="overflow-y-auto">
                      {Object.keys(departments).map((department) => (
                        <div
                          key={department}
                          className="m-5 text-sm text-gray-200 rounded-lg border-zinc-800 bg-zinc-900">
                          <p className="flex justify-between px-2 py-2 border-gray-500">
                            <span>Name</span>
                            <span>{departments[department]['name']}</span>
                          </p>
                          <p
                            className="w-full px-2 py-2 text-center text-red-800 border-t-2 cursor-pointer border-zinc-800"
                            onClick={() => handleDeleteDepartmentEvent(department)}>
                            Delete Department Event
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                  {profileSection === 7 && (
                    <>
                      <div className="m-5 text-sm text-gray-200 rounded-lg border-zinc-800 bg-zinc-900">
                        <p className="flex justify-between px-2 py-2 border-zinc-800">
                          <span>User ID</span>
                          <input
                            placeholder="Enter user id"
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={newDeptCoordie['userId']}
                            onChange={(e) =>
                              setNewDeptCoordie({ ...newDeptCoordie, userId: e.target.value })
                            }
                          />
                        </p>
                        <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                          <span>Department Event</span>
                          <select
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={newDeptCoordie['deptEventId']}
                            onChange={(e) =>
                              setNewDeptCoordie({ ...newDeptCoordie, deptEventId: e.target.value })
                            }>
                            {Object.keys(departments).map((department) => (
                              <option key={department} value={department}>
                                {departments[department]['name']}
                              </option>
                            ))}
                          </select>
                        </p>
                      </div>
                      <div
                        className="m-5 text-sm text-gray-200 rounded-lg cursor-pointer border-zinc-800 bg-zinc-900"
                        onClick={() =>
                          handleAddDepartmentEventCoordie(
                            newDeptCoordie['userId'],
                            newDeptCoordie['deptEventId']
                          )
                        }>
                        <p className="w-full px-2 py-2 text-center text-blue-900">
                          Add Department Coordie
                        </p>
                      </div>
                    </>
                  )}
                  {profileSection === 8 && (
                    <>
                      <div className="m-5 text-sm text-gray-200 rounded-lg border-zinc-800 bg-zinc-900">
                        <p className="flex justify-between px-2 py-2 border-zinc-800">
                          <span>Department Event</span>
                          <select
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={delDeptCoordie}
                            onChange={(e) => setDelDeptCoordie(e.target.value)}>
                            {Object.keys(departments).map((department) => (
                              <option key={department} value={department}>
                                {departments[department]['name']}
                              </option>
                            ))}
                          </select>
                        </p>
                      </div>
                      <div className="overflow-y-auto">
                        {deptCoordies.map((deptCoordie) => (
                          <div
                            key={deptCoordie['user']['id']}
                            className="m-5 text-sm text-gray-200 rounded-lg border-zinc-800 bg-zinc-900">
                            <p className="flex justify-between px-2 py-2 border-gray-500">
                              <span>Name</span>
                              <span>{deptCoordie['user']['name']}</span>
                            </p>
                            <p
                              className="w-full px-2 py-2 text-center text-red-800 border-t-2 cursor-pointer border-zinc-800"
                              onClick={() =>
                                handleRemoveDepartmentEventCoordie(
                                  deptCoordie['user']['id'],
                                  delDeptCoordie
                                )
                              }>
                              Delete Department Coordie
                            </p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {profileSection === 9 && (
                    <>
                      <div className="m-5 overflow-y-auto text-sm text-gray-200 rounded-lg border-zinc-800 bg-zinc-900">
                        <p className="flex justify-between px-2 py-2 border-zinc-800">
                          <span>Name</span>
                          <input
                            placeholder="Enter event name"
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={newEvent['name']}
                            onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
                          />
                        </p>
                        <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                          <span>Tagline</span>
                          <input
                            placeholder="Enter event tagline"
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={newEvent['tagline']}
                            onChange={(e) => setNewEvent({ ...newEvent, tagline: e.target.value })}
                          />
                        </p>
                        <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                          <span>Details</span>
                          <textarea
                            placeholder="Enter event details"
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={newEvent['details']}
                            onChange={(e) => setNewEvent({ ...newEvent, details: e.target.value })}
                          />
                        </p>
                        <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                          <span>Criteria</span>
                          <textarea
                            placeholder="Enter event criteria"
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={newEvent['criteria']}
                            onChange={(e) => setNewEvent({ ...newEvent, criteria: e.target.value })}
                          />
                        </p>
                        <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                          <span>Rules</span>
                          <textarea
                            placeholder="Enter event rules"
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={newEvent['rules']}
                            onChange={(e) => setNewEvent({ ...newEvent, rules: e.target.value })}
                          />
                        </p>
                        <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                          <span>Problem Statement link</span>
                          <input
                            placeholder="Enter event problem statement link (if any)"
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={newEvent['psLink']}
                            onChange={(e) => setNewEvent({ ...newEvent, psLink: e.target.value })}
                          />
                        </p>
                        <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                          <span>Poster Link</span>
                          <input
                            placeholder="Enter event poster link"
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={newEvent['poster']}
                            onChange={(e) => setNewEvent({ ...newEvent, poster: e.target.value })}
                          />
                        </p>
                        <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                          <span>Min Team Size</span>
                          <input
                            type="number"
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={newEvent['minTeamSize']}
                            onChange={(e) =>
                              setNewEvent({ ...newEvent, minTeamSize: parseInt(e.target.value) })
                            }
                          />
                        </p>
                        <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                          <span>Max Team Size</span>
                          <input
                            type="number"
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={newEvent['maxTeamSize']}
                            onChange={(e) =>
                              setNewEvent({ ...newEvent, maxTeamSize: parseInt(e.target.value) })
                            }
                          />
                        </p>
                        <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                          <span>Department Event</span>
                          <select
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={newEvent['deptEventId']}
                            onChange={(e) =>
                              setNewEvent({ ...newEvent, deptEventId: e.target.value })
                            }>
                            {Object.keys(departments).map((department) => (
                              <option key={department} value={department}>
                                {departments[department]['name']}
                              </option>
                            ))}
                          </select>
                        </p>
                      </div>
                      <div
                        className="m-5 text-sm text-gray-200 rounded-lg cursor-pointer border-zinc-800 bg-zinc-900"
                        onClick={() =>
                          handleAddEvent(
                            newEvent['name'],
                            newEvent['tagline'],
                            newEvent['details'],
                            newEvent['criteria'],
                            newEvent['rules'],
                            newEvent['psLink'] === '' ? '#' : newEvent['psLink'],
                            newEvent['poster'],
                            newEvent['maxTeamSize'],
                            newEvent['minTeamSize'],
                            newEvent['deptEventId']
                          )
                        }>
                        <p className="w-full px-2 py-2 text-center text-blue-900">Create Event</p>
                      </div>
                    </>
                  )}
                  {profileSection === 10 && newUpdateEvent['id'] !== '' && (
                    <>
                      <div className="m-5 overflow-y-auto text-sm text-gray-200 rounded-lg border-zinc-800 bg-zinc-900">
                        <p className="flex justify-between px-2 py-2 border-zinc-800">
                          <span>Name</span>
                          <input
                            placeholder="Enter event name"
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={newUpdateEvent['name']}
                            onChange={(e) =>
                              setNewUpdateEvent({ ...newUpdateEvent, name: e.target.value })
                            }
                          />
                        </p>
                        <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                          <span>Tagline</span>
                          <input
                            placeholder="Enter event tagline"
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={newUpdateEvent['tagline']}
                            onChange={(e) =>
                              setNewUpdateEvent({ ...newUpdateEvent, tagline: e.target.value })
                            }
                          />
                        </p>
                        <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                          <span>Details</span>
                          <textarea
                            placeholder="Enter event details"
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={newUpdateEvent['details']}
                            onChange={(e) =>
                              setNewUpdateEvent({ ...newUpdateEvent, details: e.target.value })
                            }
                          />
                        </p>
                        <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                          <span>Criteria</span>
                          <textarea
                            placeholder="Enter event criteria"
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={newUpdateEvent['criteria']}
                            onChange={(e) =>
                              setNewUpdateEvent({ ...newUpdateEvent, criteria: e.target.value })
                            }
                          />
                        </p>
                        <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                          <span>Rules</span>
                          <textarea
                            placeholder="Enter event rules"
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={newUpdateEvent['rules']}
                            onChange={(e) =>
                              setNewUpdateEvent({ ...newUpdateEvent, rules: e.target.value })
                            }
                          />
                        </p>
                        <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                          <span>Problem Statement link</span>
                          <input
                            placeholder="Enter event problem statement link (if any)"
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={newUpdateEvent['psLink']}
                            onChange={(e) =>
                              setNewUpdateEvent({ ...newUpdateEvent, psLink: e.target.value })
                            }
                          />
                        </p>
                        <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                          <span>Poster Link</span>
                          <input
                            placeholder="Enter event poster link"
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={newUpdateEvent['poster']}
                            onChange={(e) =>
                              setNewUpdateEvent({ ...newUpdateEvent, poster: e.target.value })
                            }
                          />
                        </p>
                        <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                          <span>Min Team Size</span>
                          <input
                            type="number"
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={newUpdateEvent['minTeamSize']}
                            onChange={(e) =>
                              setNewUpdateEvent({
                                ...newUpdateEvent,
                                minTeamSize: parseInt(e.target.value)
                              })
                            }
                          />
                        </p>
                        <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                          <span>Max Team Size</span>
                          <input
                            type="number"
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={newUpdateEvent['maxTeamSize']}
                            onChange={(e) =>
                              setNewUpdateEvent({
                                ...newUpdateEvent,
                                maxTeamSize: parseInt(e.target.value)
                              })
                            }
                          />
                        </p>
                      </div>
                      <div className="m-5 text-sm text-gray-200 rounded-lg cursor-pointer border-zinc-800 bg-zinc-900">
                        <p
                          className="w-full px-2 py-2 text-center text-blue-900"
                          onClick={() =>
                            handleUpdateEvent(
                              newUpdateEvent['id'],
                              newUpdateEvent['name'],
                              newUpdateEvent['tagline'],
                              newUpdateEvent['details'],
                              newUpdateEvent['criteria'],
                              newUpdateEvent['rules'],
                              newUpdateEvent['psLink'] === '' ? '#' : newUpdateEvent['psLink'],
                              newUpdateEvent['poster'],
                              newUpdateEvent['maxTeamSize'],
                              newUpdateEvent['minTeamSize']
                            )
                          }>
                          Update Event
                        </p>
                        <p
                          className="w-full px-2 py-2 text-center text-blue-900 border-t-2 border-zinc-800"
                          onClick={() => setNewUpdateEvent({ ...newUpdateEvent, id: '' })}>
                          Back
                        </p>
                      </div>
                    </>
                  )}
                  {profileSection === 10 && newUpdateEvent['id'] === '' && (
                    <>
                      <div className="m-5 text-sm text-gray-200 rounded-lg border-zinc-800 bg-zinc-900">
                        <p className="flex justify-between px-2 py-2 border-zinc-800">
                          <span>Department Event</span>
                          <select
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={currEUDDept}
                            onChange={(e) => setCurrEUDDept(e.target.value)}>
                            {Object.keys(departments).map((department) => (
                              <option key={department} value={department}>
                                {departments[department]['name']}
                              </option>
                            ))}
                          </select>
                        </p>
                      </div>
                      <div className="overflow-y-auto">
                        {events.map((event) => (
                          <div
                            key={event['id']}
                            className="m-5 text-sm text-gray-200 rounded-lg border-zinc-800 bg-zinc-900">
                            <p className="flex justify-between px-2 py-2 border-gray-500">
                              <span>Name</span>
                              <span>{event['name']}</span>
                            </p>
                            <p
                              className="w-full px-2 py-2 text-center text-blue-900 border-t-2 cursor-pointer border-zinc-800"
                              onClick={() => setNewUpdateEvent(event)}>
                              Update Event
                            </p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {profileSection === 11 && (
                    <>
                      <div className="m-5 text-sm text-gray-200 rounded-lg border-zinc-800 bg-zinc-900">
                        <p className="flex justify-between px-2 py-2 border-zinc-800">
                          <span>Department Event</span>
                          <select
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={currEUDDept}
                            onChange={(e) => setCurrEUDDept(e.target.value)}>
                            {Object.keys(departments).map((department) => (
                              <option key={department} value={department}>
                                {departments[department]['name']}
                              </option>
                            ))}
                          </select>
                        </p>
                      </div>
                      <div className="overflow-y-auto">
                        {events.map((event) => (
                          <div
                            key={event['id']}
                            className="m-5 text-sm text-gray-200 rounded-lg border-zinc-800 bg-zinc-900">
                            <p className="flex justify-between px-2 py-2 border-gray-500">
                              <span>Name</span>
                              <span>{event['name']}</span>
                            </p>
                            <p
                              className="w-full px-2 py-2 text-center text-red-800 border-t-2 cursor-pointer border-zinc-800"
                              onClick={() => handleDeleteEvent(event['id'])}>
                              Delete Event
                            </p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {profileSection === 12 && (
                    <>
                      <div className="m-5 text-sm text-gray-200 rounded-lg border-zinc-800 bg-zinc-900">
                        <p className="flex justify-between px-2 py-2 border-zinc-800">
                          <span>Email</span>
                          <input
                            placeholder="Enter email of user"
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={currECUD['email']}
                            onChange={(e) => setCurrECUD({ ...currECUD, email: e.target.value })}
                          />
                        </p>
                        <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                          <span>Department Event</span>
                          <select
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={currECUD['deptEventId']}
                            onChange={(e) =>
                              setCurrECUD({ ...currECUD, deptEventId: e.target.value })
                            }>
                            {Object.keys(departments).map((department) => (
                              <option key={department} value={department}>
                                {departments[department]['name']}
                              </option>
                            ))}
                          </select>
                        </p>
                        <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                          <span>Event</span>
                          <select
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={currECUD['eventId']}
                            onChange={(e) => setCurrECUD({ ...currECUD, eventId: e.target.value })}>
                            {events.map((event) => (
                              <option key={event['id']} value={event['id']}>
                                {event['name']}
                              </option>
                            ))}
                          </select>
                        </p>
                      </div>
                      <div
                        className="m-5 text-sm text-gray-200 rounded-lg cursor-pointer border-zinc-800 bg-zinc-900"
                        onClick={() =>
                          handleAddEventCoordie(currECUD['email'], currECUD['eventId'])
                        }>
                        <p className="w-full px-2 py-2 text-center text-blue-900">
                          Add Event Coordie
                        </p>
                      </div>
                    </>
                  )}
                  {profileSection === 13 && (
                    <>
                      <div className="m-5 text-sm text-gray-200 rounded-lg border-zinc-800 bg-zinc-900">
                        <p className="flex justify-between px-2 py-2 border-zinc-800">
                          <span>Department Event</span>
                          <select
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={currECUD['deptEventId']}
                            onChange={(e) =>
                              setCurrECUD({ ...currECUD, deptEventId: e.target.value })
                            }>
                            {Object.keys(departments).map((department) => (
                              <option key={department} value={department}>
                                {departments[department]['name']}
                              </option>
                            ))}
                          </select>
                        </p>
                        <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                          <span>Event</span>
                          <select
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={currECUD['eventId']}
                            onChange={(e) => setCurrECUD({ ...currECUD, eventId: e.target.value })}>
                            {events.map((event) => (
                              <option key={event['id']} value={event['id']}>
                                {event['name']}
                              </option>
                            ))}
                          </select>
                        </p>
                      </div>
                      <div className="overflow-y-auto">
                        {eventCoordies.map((eventCoordie) => (
                          <div
                            key={eventCoordie['user']['id']}
                            className="m-5 text-sm text-gray-200 rounded-lg border-zinc-800 bg-zinc-900">
                            <p className="flex justify-between px-2 py-2 border-gray-500">
                              <span>Name</span>
                              <span>{eventCoordie['user']['name']}</span>
                            </p>
                            <p
                              className="w-full px-2 py-2 text-center text-red-800 border-t-2 cursor-pointer border-zinc-800"
                              onClick={() =>
                                handleRemoveEventCoordie(
                                  eventCoordie['user']['email'],
                                  currECUD['eventId']
                                )
                              }>
                              Delete Event Coordie
                            </p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {profileSection === 14 && (
                    <>
                      <div className="m-5 text-sm text-gray-200 rounded-lg border-zinc-800 bg-zinc-900">
                        <p className="flex justify-between px-2 py-2 border-zinc-800">
                          <span>Name</span>
                          <input
                            placeholder="Enter name of sponsor"
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={currSponsorAUD['name']}
                            onChange={(e) =>
                              setCurrSponsorAUD({ ...currSponsorAUD, name: e.target.value })
                            }
                          />
                        </p>
                        <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                          <span>Poster</span>
                          <input
                            placeholder="Enter poster link of sponsor"
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={currSponsorAUD['poster']}
                            onChange={(e) =>
                              setCurrSponsorAUD({ ...currSponsorAUD, poster: e.target.value })
                            }
                          />
                        </p>
                        <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                          <span>Is Title Sponsor?</span>
                          <select
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={currSponsorAUD['title']}
                            onChange={(e) =>
                              setCurrSponsorAUD({ ...currSponsorAUD, title: e.target.value })
                            }>
                            {['Yes', 'No'].map((op) => (
                              <option key={op} value={op}>
                                {op}
                              </option>
                            ))}
                          </select>
                        </p>
                        <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                          <span>Department Event</span>
                          <select
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={currSponsorAUD['deptEventId']}
                            onChange={(e) =>
                              setCurrSponsorAUD({ ...currSponsorAUD, deptEventId: e.target.value })
                            }>
                            {Object.keys(departments).map((department) => (
                              <option key={department} value={department}>
                                {departments[department]['name']}
                              </option>
                            ))}
                          </select>
                        </p>
                        <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                          <span>Event</span>
                          <select
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={currSponsorAUD['eventId']}
                            onChange={(e) =>
                              setCurrSponsorAUD({ ...currSponsorAUD, eventId: e.target.value })
                            }>
                            {events.map((event) => (
                              <option key={event['id']} value={event['id']}>
                                {event['name']}
                              </option>
                            ))}
                          </select>
                        </p>
                      </div>
                      <div
                        className="m-5 text-sm text-gray-200 rounded-lg cursor-pointer border-zinc-800 bg-zinc-900"
                        onClick={() =>
                          handleAddEventSponsor(
                            currSponsorAUD['name'],
                            currSponsorAUD['poster'],
                            currSponsorAUD['title'] === 'Yes',
                            currSponsorAUD['eventId']
                          )
                        }>
                        <p className="w-full px-2 py-2 text-center text-blue-900">
                          Add Event Sponsor
                        </p>
                      </div>
                    </>
                  )}
                  {profileSection === 15 && updatedSponsor['name'] !== '' && (
                    <>
                      <div className="m-5 text-sm text-gray-200 rounded-lg border-zinc-800 bg-zinc-900">
                        <p className="flex justify-between px-2 py-2 border-zinc-800">
                          <span>Name</span>
                          <span>{updatedSponsor['name']}</span>
                        </p>
                        <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                          <span>Poster</span>
                          <input
                            placeholder="Enter poster link of sponsor"
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={updatedSponsor['poster']}
                            onChange={(e) =>
                              setUpdatedSponsor({ ...updatedSponsor, poster: e.target.value })
                            }
                          />
                        </p>
                        <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                          <span>Is Title Sponsor?</span>
                          <select
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={updatedSponsor['title']}
                            onChange={(e) =>
                              setUpdatedSponsor({ ...updatedSponsor, title: e.target.value })
                            }>
                            {['Yes', 'No'].map((op) => (
                              <option key={op} value={op}>
                                {op}
                              </option>
                            ))}
                          </select>
                        </p>
                      </div>
                      <div
                        className="m-5 text-sm text-gray-200 rounded-lg cursor-pointer border-zinc-800 bg-zinc-900"
                        onClick={() =>
                          handleUpdateEventSponsor(
                            updatedSponsor['name'],
                            updatedSponsor['poster'],
                            updatedSponsor['title'] === 'Yes',
                            updatedSponsor['eventId']
                          )
                        }>
                        <p className="w-full px-2 py-2 text-center text-blue-900">
                          Update Event Sponsor
                        </p>
                      </div>
                    </>
                  )}
                  {profileSection === 15 && updatedSponsor['name'] === '' && (
                    <>
                      <div className="m-5 text-sm text-gray-200 rounded-lg border-zinc-800 bg-zinc-900">
                        <p className="flex justify-between px-2 py-2 border-zinc-800">
                          <span>Department Event</span>
                          <select
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={currSponsorAUD['deptEventId']}
                            onChange={(e) =>
                              setCurrSponsorAUD({ ...currSponsorAUD, deptEventId: e.target.value })
                            }>
                            {Object.keys(departments).map((department) => (
                              <option key={department} value={department}>
                                {departments[department]['name']}
                              </option>
                            ))}
                          </select>
                        </p>
                        <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                          <span>Event</span>
                          <select
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={currSponsorAUD['eventId']}
                            onChange={(e) =>
                              setCurrSponsorAUD({ ...currSponsorAUD, eventId: e.target.value })
                            }>
                            {events.map((event) => (
                              <option key={event['id']} value={event['id']}>
                                {event['name']}
                              </option>
                            ))}
                          </select>
                        </p>
                      </div>
                      <div className="overflow-y-auto">
                        {sponsors.map((sponsor) => (
                          <div
                            key={sponsor['id']}
                            className="m-5 text-sm text-gray-200 rounded-lg border-zinc-800 bg-zinc-900">
                            <p className="flex justify-between px-2 py-2 border-gray-500">
                              <span>Name</span>
                              <span>{sponsor['name']}</span>
                            </p>
                            <p
                              className="w-full px-2 py-2 text-center text-blue-900 border-t-2 cursor-pointer border-zinc-800"
                              onClick={() =>
                                setUpdatedSponsor({
                                  name: sponsor['name'],
                                  poster: sponsor['poster'],
                                  title: sponsor['title'] ? 'Yes' : 'No',
                                  deptEventId: sponsor['deptEventId'],
                                  eventId: sponsor['eventId']
                                })
                              }>
                              Update Event Sponsor
                            </p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {profileSection === 16 && (
                    <>
                      <div className="m-5 text-sm text-gray-200 rounded-lg border-zinc-800 bg-zinc-900">
                        <p className="flex justify-between px-2 py-2 border-zinc-800">
                          <span>Department Event</span>
                          <select
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={currSponsorAUD['deptEventId']}
                            onChange={(e) =>
                              setCurrSponsorAUD({ ...currSponsorAUD, deptEventId: e.target.value })
                            }>
                            {Object.keys(departments).map((department) => (
                              <option key={department} value={department}>
                                {departments[department]['name']}
                              </option>
                            ))}
                          </select>
                        </p>
                        <p className="flex justify-between px-2 py-2 border-t-2 border-zinc-800">
                          <span>Event</span>
                          <select
                            className="flex-1 ml-1 text-right outline-none bg-zinc-900"
                            value={currSponsorAUD['eventId']}
                            onChange={(e) =>
                              setCurrSponsorAUD({ ...currSponsorAUD, eventId: e.target.value })
                            }>
                            {events.map((event) => (
                              <option key={event['id']} value={event['id']}>
                                {event['name']}
                              </option>
                            ))}
                          </select>
                        </p>
                      </div>
                      <div className="overflow-y-auto">
                        {sponsors.map((sponsor) => (
                          <div
                            key={sponsor['id']}
                            className="m-5 text-sm text-gray-200 rounded-lg border-zinc-800 bg-zinc-900">
                            <p className="flex justify-between px-2 py-2 border-gray-500">
                              <span>Name</span>
                              <span>{sponsor['name']}</span>
                            </p>
                            <p
                              className="w-full px-2 py-2 text-center text-red-800 border-t-2 cursor-pointer border-zinc-800"
                              onClick={() =>
                                handleRemoveEventSponsor(sponsor['name'], currSponsorAUD['eventId'])
                              }>
                              Delete Event Sponsor
                            </p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

NewTablet.propTypes = {
  deptId: PropTypes.string.isRequired,
  currTab: PropTypes.oneOf(['Departments', 'Profile', 'Team', 'Sponsors']).isRequired,
  logout: PropTypes.func.isRequired,
  closePopup: PropTypes.func.isRequired
};

type Props = PropTypes.InferProps<typeof NewTablet.propTypes>;

export default NewTablet;
