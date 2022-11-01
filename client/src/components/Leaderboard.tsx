import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Pagination from './Pagination';
import { supabase } from '../game/config';
import { toast } from 'react-toastify';
function Leaderboard(props: Props) {
  const { user, closePopup } = props;
  const [rankList, setRankList] = useState<any>([]);
  const [userRank, setUserRank] = useState(0);
  const [userName, setUserName] = useState(user.name);
  const [userScore, setUserScore] = useState(0);
  const [noData, setNoData] = useState(false);
  const [page, setPage] = useState(1);
  const [pageArray, setPageArray] = useState<any>([]);
  const [visibleRankList, setVisibleRankList] = useState([]);

  /**
   * Return an integer range within [min, min + total) of given length centered
   * around the current page number.
   */
  function doPaging(current: number, { range, pages, start = 1 }: any) {
    const paging = [];
    var i = Math.min(pages + start - range, Math.max(start, current - ((range / 2) | 0)));
    const end = i + range;
    while (i < end) {
      // paging.push(i === current ? `[${i++}]` : `${i++}`)
      paging.push(i++);
    }
    return paging;
  }

  useEffect(() => {
    (async () => {
      const { data: fetchRankList, error } = await supabase
        .from('leaderboard')
        .select('*')
        .order('coins', { ascending: false })
        .order('time', { ascending: true });
      if (error) {
        // console.log(error);
        toast.error('Could not load leaderboard');
        closePopup();
        return;
      }
      if (fetchRankList.length === 0) {
        setNoData(true);
        return;
      }
      fetchRankList.forEach((r, i) => {
        if (r.user_id == user.id) {
          setUserRank(i + 1);
          setUserName(r.name);
          setUserScore(r.coins);
          return;
        }
      });
      setRankList(fetchRankList);
    })();
  }, []);

  useEffect(() => {
    if (Math.ceil(rankList.length / 10) < 3) {
      if (Math.ceil(rankList.length / 10) === 1) {
        setPageArray([1]);
      } else {
        setPageArray([1, 2]);
      }
    } else {
      setPageArray(
        doPaging(page, {
          pages: Math.ceil(rankList.length / 10),
          range: 3,
          start: 1
        })
      );
    }
    setVisibleRankList(rankList.slice(10 * (page - 1), 10 * page));
  }, [rankList, page]);

  return (
    <>
      <div
        className="absolute top-0 left-0 z-20 w-screen h-screen filter backdrop-blur-sm"
        onClick={closePopup}></div>
      <div className="z-20 flex flex-col py-6 mx-auto my-auto space-y-6 w-fit h-fit">
        {noData && (
          <div className="w-full mx-auto text-center">
            <h1 className="text-2xl font-bold text-gray-200">No one solved it yet 🤯</h1>
          </div>
        )}
        {!noData && (
          <div className="flex flex-col w-full max-w-xl p-3 mx-auto space-y-2 rounded-lg bg-yellow1">
            <div className="sticky top-0 flex flex-row justify-between w-full px-3 py-2 bg-yellow1">
              <h1 className="flex-initial w-48 text-2xl font-bold text-white">Rank</h1>
              <h1 className="w-full text-2xl font-bold text-white">Name</h1>
              <h1 className="w-full text-2xl font-bold text-right text-white">Score</h1>
            </div>
            {userRank != 0 && (page - 1) * 10 + 1 > userRank && (
              <div
                className={`w-full flex flex-row justify-between items-center rounded-lg p-2 px-4 border-b-2 bg-blue-300 text-white border-green-500"`}>
                <div className="flex-initial w-48">
                  <span>{userRank}</span>
                </div>
                <div className="w-full">
                  <span>{userName}</span>
                </div>
                <div className="w-full text-right">
                  <span>{userScore}</span>
                </div>
              </div>
            )}
            {visibleRankList.map((rank: any, index: number) => {
              return (
                <div
                  className={`w-full flex flex-row justify-between items-center rounded-lg p-2 px-4 border-b-2 ${
                    rank.user_id != user.id
                      ? 'bg-white border-gray-300'
                      : 'bg-blue-300 text-white border-green-500'
                  }`}
                  key={index}>
                  <div className="flex-initial w-48">
                    <span>{(page - 1) * 10 + index + 1}</span>
                  </div>
                  <div className="w-full">
                    <span>{rank.name}</span>
                  </div>
                  <div className="w-full text-right">
                    <span>{rank.coins}</span>
                  </div>
                </div>
              );
            })}
            {userRank != 0 && page * 10 < userRank && (
              <div
                className={`w-full flex flex-row justify-between items-center rounded-lg p-2 px-4 border-b-2 bg-blue-300 text-white border-green-500"`}>
                <div className="flex-initial w-48">
                  <span>{userRank}</span>
                </div>
                <div className="w-full">
                  <span>{userName}</span>
                </div>
                <div className="w-full text-right">
                  <span>{userScore}</span>
                </div>
              </div>
            )}
            <Pagination
              current={page}
              total={Math.ceil(rankList.length / 10)}
              pageArray={pageArray}
              onChange={(_page: number) => {
                setPage(_page);
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}

Leaderboard.propTypes = {
  user: PropTypes.any.isRequired,
  closePopup: PropTypes.func.isRequired
};

type Props = PropTypes.InferProps<typeof Leaderboard.propTypes>;

export default Leaderboard;
