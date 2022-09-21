import React, {useState, useRef} from 'react';
import {colors} from '../../theme/colors';
import OulinedButton from '../../Components/Buttons/OulinedButton';
import NavIcons from '../../Styles/NavIcons';
const AddMovie = () => {
  const [currentStep, setcurrentStep] = useState(0);
  const [movieDetails, setmovieDetails] = useState({
    'movieName': '',
    'movieDescription': '',
    'movieAdult': false,
    'movieVideo': false,
    'movieTagline': '',
    'movieRevenue': '',
    'movieWebpage': '',
    'movieImage': '',
    'movieCoverImage': '',
    'movieTrailer': '',
    'movieGenre': '',
    'movieReleaseDate': '',
    'movieDuration': '',
    'movieLanguage': '',
    'movieCast': [],
    'movieDirector': '',
    'movieProducer': '',
    'movieWriter': '',
    'movieMusic': '',
    'movieCinematography': '',
    'movieEditor': '',
    'movieProductionCompany': '',
    'movieDistributor': '',
    'movieBudget': '',
    'movieBoxOffice': '',
  });
  const castRef = useRef();
  const submitMovie = () => {
  };
  const addMovie = () => {
    switch (currentStep) {
      case 0:
        return <div>
          <div className='flex flex-col gap-4 py-4'>
            <h1 className='text-lg font-bold'>Movie Details</h1>
            <div>
              <div className='font-light text-sm' style={{color: colors.gray}}>
                <label>Movie Title</label>
              </div>
              <input
                onChange={(v)=> setmovieDetails({...movieDetails,
                  movieName: v.target.value})}
                className='border w-full rounded-md p-2 focus:outline-none'/>
            </div>
          </div>
          <div className='grid gap-4 grid-cols-2'>
            <div>
              <div className='font-light text-sm'
                style={{color: colors.gray}}>
                <label>Movie Cast</label>
              </div>
              <div>
                <div className='flex gap-2'>
                  <input ref={castRef} type={'text'}
                    className='border w-full rounded-md p-2
                    focus:outline-none'/>
                  <button className='px-4 rounded-md'
                    onClick={()=> {
                      setmovieDetails({...movieDetails,
                        movieCast: [...movieDetails.movieCast,
                          castRef.current.value]});
                      castRef.current.value = '';
                    }
                    }
                    style={{
                      backgroundColor: colors.primary,
                      color: colors.primaryLight,
                    }}>+</button>
                </div>
                <div>
                  {
                    movieDetails.movieCast.map((item, index) => {
                      return <div key={index}
                        className='flex justify-between
                        items-center gap-2 py-2'>
                        <div className='w-full py-1 px-2 rounded-md' style={{
                          backgroundColor: colors.primaryLight,
                        }}>{item}</div>
                        <button className='rounded-md px-3 py-2'
                          onClick={()=> {
                            setmovieDetails({...movieDetails,
                              movieCast: movieDetails.movieCast.filter(
                                  (item, i) => i !== index)});
                          }}
                          style={{
                            backgroundColor: colors.redPrimary,
                          }}>
                          <NavIcons name={'close'}
                            color={colors.primaryLight} height={'0.9rem'}/>
                        </button>
                      </div>;
                    })
                  }
                </div>
              </div>
            </div>
            <div>
              <div className='font-light text-sm' style={{color: colors.gray}}>
                <label>Movie Trailer URL</label>
              </div>
              <input
                onChange={(v)=> setmovieDetails({...movieDetails,
                  movieTrailer: v.target.value})}
                className='border w-full rounded-md p-2 focus:outline-none'/>
            </div>
          </div>
          <div className='py-4'>
            <div className='font-light text-sm' style={{color: colors.gray}}>
              <label>Movie Overview (English) </label>
            </div>
            <textarea onChange={(v)=> setmovieDetails({...movieDetails,
              movieDescription: v.target.value})}
            className='w-full h-40 border
            rounded-md p-2 focus:outline-none'/>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <div className='font-light text-sm pb-2'
                style={{color: colors.gray}}>
                <label>Movie Poster</label>
              </div>
              <div>
                <input type={'file'}
                  className='file'
                  onChange={(v)=> setmovieDetails({...movieDetails,
                    movieImage: v.target.files[0]})}/>
              </div>
            </div>
            <div>
              <div className='font-light text-sm pb-2'
                style={{color: colors.gray}}>
                <label>Movie Cover</label>
              </div>
              <div>
                <input type={'file'}
                  className='file'
                  onChange={(v)=> setmovieDetails({...movieDetails,
                    movieCoverImage: v.target.files[0]})}/>
              </div>
            </div>
          </div>
        </div>;
      case 1:
        return <div className='flex flex-col gap-4 py-4'>
          <h1 className='text-lg font-bold'>Additional Details</h1>
          <div className='flex gap-4 justify-between w-full '>
            <div className='w-full md:w-1/2'>
              <div className='font-light text-sm' style={{color: colors.gray}}>
                <label>Adult Movie?</label>
              </div>
              <div className='w-full p-2 rounded-md border  '>
                <select onChange={(v)=> setmovieDetails({...movieDetails,
                  movieAdult: Boolean(v.target.value)})}
                className='w-full focus:outline-none'>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
            </div>
            <div className='w-full md:w-1/2'>
              <div className='font-light text-sm' style={{color: colors.gray}}>
                <label>Video?</label>
              </div>
              <div className='w-full p-2 rounded-md border  '>
                <select onChange={(v)=> setmovieDetails({...movieDetails,
                  movieVideo: Boolean(v.target.value)})} className='w-full
                focus:outline-none'>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <div className='font-light text-sm' style={{color: colors.gray}}>
              <label>Tagline (English)</label>
            </div>
            <input onChange={(v)=> setmovieDetails({...movieDetails,
              movieTagline: v.target.value})}
            className='border w-full rounded-md p-2 focus:outline-none'/>
          </div>
          <div>
            <div className='font-light text-sm' style={{color: colors.gray}}>
              <label>Runtime (in minutes)</label>
            </div>
            <input onChange={(v)=> setmovieDetails({...movieDetails,
              movieDuration: v.target.value})}
            className='border w-full rounded-md p-2 focus:outline-none'/>
          </div>
          <div>
            <div className='font-light text-sm' style={{color: colors.gray}}>
              <label>Budget (in U.S. dollars)</label>
            </div>
            <input onChange={(v)=> setmovieDetails({...movieDetails,
              movieBudget: v.target.value})}
            className='border w-full rounded-md p-2 focus:outline-none'/>
          </div>
          <div>
            <div className='font-light text-sm' style={{color: colors.gray}}>
              <label>Revenue (in U.S. dollars)</label>
            </div>
            <input onChange={(v)=> setmovieDetails({...movieDetails,
              movieRevenue: v.target.value})}
            className='border w-full rounded-md p-2 focus:outline-none'/>
          </div>
          <div>
            <div className='font-light text-sm' style={{color: colors.gray}}>
              <label>Webpage (http://www.domain.com/)</label>
            </div>
            <input onChange={(v)=> setmovieDetails({...movieDetails,
              movieWebpage: v.target.value})}
            className='border w-full rounded-md p-2 focus:outline-none'/>
          </div>
        </div>;
      case 2:
        return <div className='flex flex-col gap-4 py-4'>
          <h1 className='text-lg font-bold'>Verify & Save</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <div className='pb-2'>
              <div className='font-light text-sm' style={{color: colors.gray}}>
                <label>Movie Title</label>
              </div>
              <div>{movieDetails.movieName}</div>
            </div>
            <div className='pb-2'>
              <div className='font-light text-sm' style={{color: colors.gray}}>
                <label>Movie Overview</label>
              </div>
              <div>{movieDetails.movieDescription}</div>
            </div>
            <div className='pb-2'>
              <div className='font-light text-sm' style={{color: colors.gray}}>
                <label>Adult Movie?</label>
              </div>
              <div>{movieDetails.movieAdult?'Yes':'No'}</div>
            </div>
            <div className='pb-2'>
              <div className='font-light text-sm' style={{color: colors.gray}}>
                <label>Video?</label>
              </div>
              <div>{movieDetails.movieVideo?'Yes':'No'}</div>
            </div>
            <div className='pb-2'>
              <div className='font-light text-sm' style={{color: colors.gray}}>
                <label>Tagline</label>
              </div>
              <div>{movieDetails.movieTagline}</div>
            </div>
            <div className='pb-2'>
              <div className='font-light text-sm' style={{color: colors.gray}}>
                <label>Runtime (in minutes)</label>
              </div>
              <div>{movieDetails.movieDuration}</div>
            </div>
            <div className='pb-2'>
              <div className='font-light text-sm' style={{color: colors.gray}}>
                <label>Budget</label>
              </div>
              <div>{movieDetails.movieBudget}</div>
            </div>
            <div className='pb-2'>
              <div className='font-light text-sm' style={{color: colors.gray}}>
                <label>Revenue</label>
              </div>
              <div>{movieDetails.movieRevenue}</div>
            </div>
            <div className='pb-2'>
              <div className='font-light text-sm' style={{color: colors.gray}}>
                <label>Webpage</label>
              </div>
              <div>{movieDetails.movieWebpage}</div>
            </div>
          </div>
        </div>;
    }
  };
  return (
    <div>
      <div>
        <h1 className='text-xl font-bold'>Add New Movie</h1>
      </div>
      <div className='max-w-4xl mx-auto'>
        {addMovie()}
        <div className='flex justify-end gap-4'>
          {currentStep > 0 && <OulinedButton label={'Previous'}
            onClick={()=>{
              setcurrentStep((currentStep-1)%3);
              currentStep == 3 && submit();
            }
            }
          />}
          <OulinedButton label={currentStep == 2?'Submit':'Next'}
            onClick={()=>{
              currentStep == 2 && submitMovie();
              setcurrentStep((currentStep+1)%3);
            }}/>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
