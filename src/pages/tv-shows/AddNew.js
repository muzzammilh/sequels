import React, {useState, useRef} from 'react';
import {colors} from '../../theme/colors';
import OulinedButton from '../../Components/Buttons/OulinedButton';
import NavIcons from '../../Styles/NavIcons';
const AddTvShow = () => {
  const [currentStep, setcurrentStep] = useState(0);
  const [TVShowDetails, setTVShowDetails] = useState({
    'TVShowName': '',
    'TVShowDescription': '',
    'TVShowAdult': false,
    'TVShowVideo': false,
    'TVShowTagline': '',
    'TVShowRevenue': '',
    'TVShowWebpage': '',
    'TVShowImage': '',
    'TVShowCoverImage': '',
    'TVShowTrailer': '',
    'TVShowGenre': '',
    'TVShowReleaseDate': '',
    'TVShowDuration': '',
    'TVShowLanguage': '',
    'TVShowCast': [],
    'TVShowDirector': '',
    'TVShowProducer': '',
    'TVShowWriter': '',
    'TVShowMusic': '',
    'TVShowCinematography': '',
    'TVShowEditor': '',
    'TVShowProductionCompany': '',
    'TVShowDistributor': '',
    'TVShowBudget': '',
    'TVShowBoxOffice': '',
  });
  const castRef = useRef();
  const submitTVShow = () => {
  };
  const addTVShow = () => {
    switch (currentStep) {
      case 0:
        return <div>
          <div className='flex flex-col gap-4 py-4'>
            <h1 className='text-lg font-bold'>TVShow Details</h1>
            <div>
              <div className='font-light text-sm' style={{color: colors.gray}}>
                <label>TVShow Title</label>
              </div>
              <input
                onChange={(v)=> setTVShowDetails({...TVShowDetails,
                  TVShowName: v.target.value})}
                className='border w-full rounded-md p-2 focus:outline-none'/>
            </div>
          </div>
          <div className='grid gap-4 grid-cols-2'>
            <div>
              <div className='font-light text-sm'
                style={{color: colors.gray}}>
                <label>TVShow Cast</label>
              </div>
              <div>
                <div className='flex gap-2'>
                  <input ref={castRef} type={'text'}
                    className='border w-full rounded-md p-2
                    focus:outline-none'/>
                  <button className='px-4 rounded-md'
                    onClick={()=> {
                      setTVShowDetails({...TVShowDetails,
                        TVShowCast: [...TVShowDetails.TVShowCast,
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
                    TVShowDetails.TVShowCast.map((item, index) => {
                      return <div key={index}
                        className='flex justify-between
                        items-center gap-2 py-2'>
                        <div className='w-full py-1 px-2 rounded-md' style={{
                          backgroundColor: colors.primaryLight,
                        }}>{item}</div>
                        <button className='rounded-md px-3 py-2'
                          onClick={()=> {
                            setTVShowDetails({...TVShowDetails,
                              TVShowCast: TVShowDetails.TVShowCast.filter(
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
                <label>TVShow Trailer URL</label>
              </div>
              <input
                onChange={(v)=> setTVShowDetails({...TVShowDetails,
                  TVShowTrailer: v.target.value})}
                className='border w-full rounded-md p-2 focus:outline-none'/>
            </div>
          </div>
          <div className='py-4'>
            <div className='font-light text-sm' style={{color: colors.gray}}>
              <label>TVShow Overview (English) </label>
            </div>
            <textarea onChange={(v)=> setTVShowDetails({...TVShowDetails,
              TVShowDescription: v.target.value})}
            className='w-full h-40 border
            rounded-md p-2 focus:outline-none'/>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <div className='font-light text-sm pb-2'
                style={{color: colors.gray}}>
                <label>TVShow Poster</label>
              </div>
              <div>
                <input type={'file'}
                  className='file'
                  onChange={(v)=> setTVShowDetails({...TVShowDetails,
                    TVShowImage: v.target.files[0]})}/>
              </div>
            </div>
            <div>
              <div className='font-light text-sm pb-2'
                style={{color: colors.gray}}>
                <label>TVShow Cover</label>
              </div>
              <div>
                <input type={'file'}
                  className='file'
                  onChange={(v)=> setTVShowDetails({...TVShowDetails,
                    TVShowCoverImage: v.target.files[0]})}/>
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
                <label>Adult TVShow?</label>
              </div>
              <div className='w-full p-2 rounded-md border  '>
                <select onChange={(v)=> setTVShowDetails({...TVShowDetails,
                  TVShowAdult: Boolean(v.target.value)})}
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
                <select onChange={(v)=> setTVShowDetails({...TVShowDetails,
                  TVShowVideo: Boolean(v.target.value)})} className='w-full
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
            <input onChange={(v)=> setTVShowDetails({...TVShowDetails,
              TVShowTagline: v.target.value})}
            className='border w-full rounded-md p-2 focus:outline-none'/>
          </div>
          <div>
            <div className='font-light text-sm' style={{color: colors.gray}}>
              <label>Runtime (in minutes)</label>
            </div>
            <input onChange={(v)=> setTVShowDetails({...TVShowDetails,
              TVShowDuration: v.target.value})}
            className='border w-full rounded-md p-2 focus:outline-none'/>
          </div>
          <div>
            <div className='font-light text-sm' style={{color: colors.gray}}>
              <label>Budget (in U.S. dollars)</label>
            </div>
            <input onChange={(v)=> setTVShowDetails({...TVShowDetails,
              TVShowBudget: v.target.value})}
            className='border w-full rounded-md p-2 focus:outline-none'/>
          </div>
          <div>
            <div className='font-light text-sm' style={{color: colors.gray}}>
              <label>Revenue (in U.S. dollars)</label>
            </div>
            <input onChange={(v)=> setTVShowDetails({...TVShowDetails,
              TVShowRevenue: v.target.value})}
            className='border w-full rounded-md p-2 focus:outline-none'/>
          </div>
          <div>
            <div className='font-light text-sm' style={{color: colors.gray}}>
              <label>Webpage (http://www.domain.com/)</label>
            </div>
            <input onChange={(v)=> setTVShowDetails({...TVShowDetails,
              TVShowWebpage: v.target.value})}
            className='border w-full rounded-md p-2 focus:outline-none'/>
          </div>
        </div>;
      case 2:
        return <div className='flex flex-col gap-4 py-4'>
          <h1 className='text-lg font-bold'>Verify & Save</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <div className='pb-2'>
              <div className='font-light text-sm' style={{color: colors.gray}}>
                <label>TVShow Title</label>
              </div>
              <div>{TVShowDetails.TVShowName}</div>
            </div>
            <div className='pb-2'>
              <div className='font-light text-sm' style={{color: colors.gray}}>
                <label>TVShow Overview</label>
              </div>
              <div>{TVShowDetails.TVShowDescription}</div>
            </div>
            <div className='pb-2'>
              <div className='font-light text-sm' style={{color: colors.gray}}>
                <label>Adult TVShow?</label>
              </div>
              <div>{TVShowDetails.TVShowAdult?'Yes':'No'}</div>
            </div>
            <div className='pb-2'>
              <div className='font-light text-sm' style={{color: colors.gray}}>
                <label>Video?</label>
              </div>
              <div>{TVShowDetails.TVShowVideo?'Yes':'No'}</div>
            </div>
            <div className='pb-2'>
              <div className='font-light text-sm' style={{color: colors.gray}}>
                <label>Tagline</label>
              </div>
              <div>{TVShowDetails.TVShowTagline}</div>
            </div>
            <div className='pb-2'>
              <div className='font-light text-sm' style={{color: colors.gray}}>
                <label>Runtime (in minutes)</label>
              </div>
              <div>{TVShowDetails.TVShowDuration}</div>
            </div>
            <div className='pb-2'>
              <div className='font-light text-sm' style={{color: colors.gray}}>
                <label>Budget</label>
              </div>
              <div>{TVShowDetails.TVShowBudget}</div>
            </div>
            <div className='pb-2'>
              <div className='font-light text-sm' style={{color: colors.gray}}>
                <label>Revenue</label>
              </div>
              <div>{TVShowDetails.TVShowRevenue}</div>
            </div>
            <div className='pb-2'>
              <div className='font-light text-sm' style={{color: colors.gray}}>
                <label>Webpage</label>
              </div>
              <div>{TVShowDetails.TVShowWebpage}</div>
            </div>
          </div>
        </div>;
    }
  };
  return (
    <div>
      <div>
        <h1 className='text-xl font-bold'>Add New TVShow</h1>
      </div>
      <div className='max-w-4xl mx-auto'>
        {addTVShow()}
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
              currentStep == 2 && submitTVShow();
              setcurrentStep((currentStep+1)%3);
            }}/>
        </div>
      </div>
    </div>
  );
};

export default AddTvShow;
