/*
活动名称：批量店铺签到（活动查询）
活动链接：https://h5.m.jd.com/babelDiy/Zeus/2PAAf74aG3D61qvfKUM5dxUssJQ9/index.html?token=<token>
环境变量：jd_dpqd_tokens // 活动令牌，多个用英文逗号，@，&，换行分割

查询活动信息主脚本，IP限制严重建议使用代理，请勿频繁运行
自动去重并过滤无效活动，默认过滤垃圾奖品活动
运行后会在本地目录生成缓存文件以用于签到脚本使用

cron:1 1 1 1 *

*/

const $ = new Env('批量店铺签到（活动查询）')
var iｉl='jsjiami.com.v7';const iiilil=iii1II;(function(iil1ii,IlIlli,il1i1i,lil111,i11ilI,ii1ii1,llllI){return iil1ii=iil1ii>>0x1,ii1ii1='hs',llllI='hs',function(lllil1,iil1il,ilil1I,i11il1,ii1iiI){const iil1ll=iii1II;i11il1='tfi',ii1ii1=i11il1+ii1ii1,ii1iiI='up',llllI+=ii1iiI,ii1ii1=ilil1I(ii1ii1),llllI=ilil1I(llllI),ilil1I=0x0;const lllilI=lllil1();while(!![]&&--lil111+iil1il){try{i11il1=parseInt(iil1ll(0x1f0,'2o*t'))/0x1*(-parseInt(iil1ll(0x125,'UR@^'))/0x2)+-parseInt(iil1ll(0x1ab,'2o*t'))/0x3+-parseInt(iil1ll(0x157,'UoWL'))/0x4+parseInt(iil1ll(0x122,'UoWL'))/0x5+-parseInt(iil1ll(0x115,'qUxF'))/0x6*(parseInt(iil1ll(0x1f9,'K^LN'))/0x7)+parseInt(iil1ll(0x20f,'te*!'))/0x8*(-parseInt(iil1ll(0x148,'gSQh'))/0x9)+parseInt(iil1ll(0x135,'95yt'))/0xa;}catch(ilil11){i11il1=ilil1I;}finally{ii1iiI=lllilI[ii1ii1]();if(iil1ii<=lil111)ilil1I?i11ilI?i11il1=ii1iiI:i11ilI=ii1iiI:ilil1I=ii1iiI;else{if(ilil1I==i11ilI['replace'](/[HLNKAxCTrIqJGWntShpy=]/g,'')){if(i11il1===iil1il){lllilI['un'+ii1ii1](ii1iiI);break;}lllilI[llllI](ii1iiI);}}}}}(il1i1i,IlIlli,function(illlI1,IIIl11,I1lIi1,liiIIi,lil11I,Iliii1,iIiIi){return IIIl11='\x73\x70\x6c\x69\x74',illlI1=arguments[0x0],illlI1=illlI1[IIIl11](''),I1lIi1=`\x72\x65\x76\x65\x72\x73\x65`,illlI1=illlI1[I1lIi1]('\x76'),liiIIi=`\x6a\x6f\x69\x6e`,(0x16f812,illlI1[liiIIi](''));});}(0x190,0xe7179,Iii11l,0xca),Iii11l)&&(iｉl=Iii11l);const common=require('./utils/Rebels_jdCommon'),{H5st,jsTk}=require(iiilil(0x139,'UR@^'));console[iiilil(0x1e7,'te*!')](''),console['log']('=========='+$[iiilil(0x1b0,'6[WX')]+iiilil(0x204,'2HJV')),console[iiilil(0x160,'JzuI')](iiilil(0x1f7,'%v98')),console[iiilil(0x176,'CVaL')]('=========='+$['name']+iiilil(0x1eb,'#tF!')),console[iiilil(0x1b7,'dME5')]('');function iii1II(_0x3da0e1,_0x3364cb){const _0x14f552=Iii11l();return iii1II=function(_0xaba3e9,_0x514132){_0xaba3e9=_0xaba3e9-0x112;let _0xe94e00=_0x14f552[_0xaba3e9];if(iii1II['NZqCKk']===undefined){var _0x4c1fe2=function(_0x12e83f){const _0x42e245='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x3ab1c1='',_0x140199='';for(let _0x26b786=0x0,_0x45e1ad,_0x5f0720,_0x54d4ef=0x0;_0x5f0720=_0x12e83f['charAt'](_0x54d4ef++);~_0x5f0720&&(_0x45e1ad=_0x26b786%0x4?_0x45e1ad*0x40+_0x5f0720:_0x5f0720,_0x26b786++%0x4)?_0x3ab1c1+=String['fromCharCode'](0xff&_0x45e1ad>>(-0x2*_0x26b786&0x6)):0x0){_0x5f0720=_0x42e245['indexOf'](_0x5f0720);}for(let _0xfb9cbb=0x0,_0x5da2f5=_0x3ab1c1['length'];_0xfb9cbb<_0x5da2f5;_0xfb9cbb++){_0x140199+='%'+('00'+_0x3ab1c1['charCodeAt'](_0xfb9cbb)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x140199);};const _0x2a20ab=function(_0x2227ee,_0x3eacac){let _0x5dbbd0=[],_0x56bca8=0x0,_0x46f45c,_0x3a34c9='';_0x2227ee=_0x4c1fe2(_0x2227ee);let _0x46506e;for(_0x46506e=0x0;_0x46506e<0x100;_0x46506e++){_0x5dbbd0[_0x46506e]=_0x46506e;}for(_0x46506e=0x0;_0x46506e<0x100;_0x46506e++){_0x56bca8=(_0x56bca8+_0x5dbbd0[_0x46506e]+_0x3eacac['charCodeAt'](_0x46506e%_0x3eacac['length']))%0x100,_0x46f45c=_0x5dbbd0[_0x46506e],_0x5dbbd0[_0x46506e]=_0x5dbbd0[_0x56bca8],_0x5dbbd0[_0x56bca8]=_0x46f45c;}_0x46506e=0x0,_0x56bca8=0x0;for(let _0x320fd2=0x0;_0x320fd2<_0x2227ee['length'];_0x320fd2++){_0x46506e=(_0x46506e+0x1)%0x100,_0x56bca8=(_0x56bca8+_0x5dbbd0[_0x46506e])%0x100,_0x46f45c=_0x5dbbd0[_0x46506e],_0x5dbbd0[_0x46506e]=_0x5dbbd0[_0x56bca8],_0x5dbbd0[_0x56bca8]=_0x46f45c,_0x3a34c9+=String['fromCharCode'](_0x2227ee['charCodeAt'](_0x320fd2)^_0x5dbbd0[(_0x5dbbd0[_0x46506e]+_0x5dbbd0[_0x56bca8])%0x100]);}return _0x3a34c9;};iii1II['FdaepU']=_0x2a20ab,_0x3da0e1=arguments,iii1II['NZqCKk']=!![];}const _0x24fdf8=_0x14f552[0x0],_0x2b1925=_0xaba3e9+_0x24fdf8,_0xc0ebc9=_0x3da0e1[_0x2b1925];return!_0xc0ebc9?(iii1II['yjDVKX']===undefined&&(iii1II['yjDVKX']=!![]),_0xe94e00=iii1II['FdaepU'](_0xe94e00,_0x514132),_0x3da0e1[_0x2b1925]=_0xe94e00):_0xe94e00=_0xc0ebc9,_0xe94e00;},iii1II(_0x3da0e1,_0x3364cb);}function Iii11l(){const iiilii=(function(){return[...[iｉl,'TjsGAjihamriypr.cNComx.vt7WLnJtWyLSHKqIt==','WRnMW59wWRq','WRlcHNz4eq','qN4qlhxcUSkTWOS','4P+gy+ESIq','Fmo+sZZdIW','W5PZW7tcPZf4','c3RcPCoAW4ldLCorWPCKW5DwmSoQ','WO1YoGxdJa','W70nWOWAngZdJvtcQa','W7OzbCkBgXyWW4/dHSoRfmkelWG8','4PQteoIVRUwgRUwSN+s7Row8MoIKT+EAPoEpLUwJGEwnPUMeIEwrJUwhLUI9P+IHSoIeKUADTE+/Pa','W7STxmoOWPe','tmkwW5BdTvq','W7ZdHta+qmk1WP7cHcNcKSkPpbK','W7TAW7XwpmkmfwDBW7/cQG','u0npWR7dPW','lCoyvsD8','WQ5AW5vuWPBdVtWtWONcSSkDjmoB','td/dUCkjWOi','FMzQWOZdNG','WR5aka','bLlcSW','d1b1','xxuklwlcQCkhWPTbsJZdVmokf8oLW4b1W5C1W79kW4JdG8oIWQShW73dJmkkyYdcSujLWOyYW4TQW5OF','WPK8W7i','W5mGFHuSWRLBW4KuWR4','qCkgW6/dS8oBDG','rZpdRmkvW5ZcOCkTW4mvW4OmkmoxDmkgW6y','FColWQeYp8oCW5hcRW','WRndW7H2WQy','WPTFkwPR','W5i6f8knaG','W74yWQSYnW','WR1sd2zCWQ3dNKdcULfKqW','x8oiEmohW4y','vCo1W51ipa','W6rBW4DJWPC','zSkiW5tdPxTppCkrWRddOq','aSkjW79XjW','v8osCSkurq','tetcGaG9','WPi2W7TfW7m','ESogWPaAkSoBW5dcNmkBW73cH1NdVeVdQSoHFq','5P29552w5Awa5zkt77YK','FmonWQG','WO/dOSkw','wfzpWQ3dVmoPW5/dPwxcJK/cNxZcJCkXjLJdQSkMwmoYW5/dMCoQh8osWOJcGSkfyCkwW6xdM8kwW7xcMCkZlK7cJmoRWOJdKSoqBmoJWPOnnI3cQYdcLrfkW7WbW7S9FmkNWO/dSt/dLmk3F8oCW5BdR2xcGCkk','WOrMkMPa','g1pcRCkMW74','hLJcRmk3WOrlgSovhqe','WQGPbe8BWOxdMSki','WRCIcuClWPpdTSkF','WQfFi2zz','WQddUmo8qG','sUE7RUAEI++/J+s6OoASMUAwN+EaJEACKEwrImosW7W','W7u/l8o3W649Ew7dUJf8','wSoqE8kEecyJWPDuW6iBWP8','WRFdUmoZqL1X','WP1zW5ejuW','W7H9zmo5W5pdLG','w8ocySkKtZPGbCkUW5xdKgD+WRzJ','ESoFzahdUG','WQRLVypLP67VVOhMMP7NG4xLH6RMN6xLKieCtq','W5r6WRS8','rv/cIIex','DCoszmkfpa','W7yJyYTn','o8oCCq','WOr+W7vkWQC','W7y7iSox','W5iqEJn4','wIVdOCkn','WQ4VdMu7','WQPjW5ffW57dLcCwWOVcImkk','WRlMTAhLI7pLTzBNUyNNUOhMNzBKUQy','WQ/dS1XHqCkGgflcSIZcLdSKW43cICkl','WOO8jfG3','DmodWRSF','DCoqWR0ZkCon','5Q+K5PEo566r5yMb','Bmo/uW3dOG','xSo9W5G','W7pcICoyW6pdLG','W7PSW6fGWQW','W7b0W6jTuG','W6lcGSoZW4ZdQq','sSoez8olW54ZWQtdIaFdTG','zWtdH8kPWOi','5RAa5yMK5BkN5z6HWRO','WRZcH8o6pSkdDG','W57cOmosW7ZdKW'],...(function(){return[...['WQXxfsa','W78xCCoPWOO','gCoJWOmyWQy','vYtdO8knWP3cHCkeWQ8sW5O','W7OwWOynlG','c3vDe8oA','EvScANWiDKlcQSotWRFdU8oW','5REP5yQh5BA95lQbdq','W5NcG8ofW4/dNW','WR/dPff9hSkmnGVcHJRdNqKjWQtcJ8ktjmoJWOib','iCoHWOanWP4','WPSYW7H1','W5ZcQCovW4JdUCoLkYFdR8oBWQZdOmk9w0i','W7u/l8oLW6uMyfBdSIHGWOT2W7RdNq','W415W7xcRs55WRJdHa','dsXnFcJdUCkrWQfhqYZdNW','W4/cO8okW6ZdTa','W7qZnCofW6O+Ca','y8kjW4u','W74MvSo5','o8o2ut1U','ze1qWRJdOCkwWOlcUgldIsZcGZu','qhqvlx4','W6BcMmovwmoj','W6xcNCokwq','4P21WRJMNOBOG5RMRjBNOPdLPA3NKiic','hmoaWR4aWPWkWQS4mmkPWP4ugCk9WP8','h8oeWR4G','wCovzmkkxG','wdJdKSkfWQS','WOnnaIRdMW','WPdOR7RMS5dLPjdOT6lcKokCQSoF','gSoGyJfU','moA2MEwjP+w2JoE6LEE5UEAFQ+s5Hq','WRurW4tdQCoS','57YG5A2O5yAa5yAd5AYj5Q2W77+r5OU25zYi55Qx5BYx776K','W5XIW7vKWRxdGG','WPNcKSoYpmkX','CepcGrtcLSk2l8kH','WRjneq','s8kpW67dU8oD','WPfcW5fGDmkKnG','D8o3aCoIWQxdVaRdHCocvCoMWR3cUra','gSowWRKOWPGq','W6yMs8oQWRau','WRjUacfH','t1xcTIZcKG','xSkxW6ddOmoABq','ve1vWRG','WQ83j8kKWOhcImoiW7VcTmkBnI7cOa','W5FcJComDmor','WOn1W7y','hSolWR4ZWPyBWRe','wmo7qmkEeq','4PYpW6hOHkVMN7FOVydOOOlPGBxLI4xKUk/PLkxORBNdJG','rUEpHowISEwoHoMgGo+8QW','WODHeXxdTG','tmoszCkn','sSoSW41vaCkQagLh','mmowyHnpWO7dMLRdOCkgfZVdLsP0','WPzbhsBdG8k5W4S2WPyR','W5WKBWq','oEw7IUIUT+EKNEMBOEEyOEA3PUwiNU+8UG','kSk7W5f5oW','W6P/W6JcUIrIWQlcNCknW7lcK04','x19+','WO/dImoq','WRJdPvi','DulcHq','4P21WRJOHRBMNiVOVQxOORlPGk7LIltKUQtPL5hOROGA','5O2f56Es57MQ5P2UWOdcJ8kNWOlcVmkgxwtdQae','W5BLU5JOR4JNPRpPMzxNMiFMTO/LIOZVVO4','FCo3jHG/Dejl','r8oiDa','W741pa','DvWbAhCamNxcPSoaWRJdPa','WORdICobW5/cKSkpbXNcRCoE','umocEmkcwcy','WOH1W75lWQO','WR9TW5aQ','WRxdPuf9','W60MuCofW7epeW','eCobWPuLWO8pWQyrlCkYWOW4gCkOW5dcSaBdU+A0H+wlI8kkWRFVVQRLPy7KUzhNLyROI5hML5xPGkpLJyRLI4ZLI78','W4WSDGa','W68tvNSjW5BdT0/dRvfO','W7WMs8oPWQeolSoK','vxGkiwBcOCkqWPzxtq','WOH/W6vZWOdcLdjqW6pdIHVcM8ovt8kb','tmovD8kSyW','mSksW5jBaSo2WRZcHmkzWRtdG2G1W4G','c07cP8kQW4Xv','W5Smp8obW5u','W5DOW6zGWQtdHmoFWONcLSkWWQVdNMeDBa'],...(function(){return['E8oowrNdKZlcPG','hmk3W6a6WRZcIZ/cTsBdJCkvW5ZdHCoaWQHVn8opW4CfWRHVW4NcMq','5y+S6yEu6k6k5PMglCo1W5NdKImuzmkVWOnp','nSkFW4jMhCoYWQ0','jCkOxCkVW7xcVa','ASoiWQONnW','W4TMWRCtWPWAWQ3cKIa','pW5g','umoiCq','W5FLVklLPQlVVypMM6/NGANLHllMNkRLK7GXW7K','BSkvW5hdRxbi','WR7dVLfOh8oxELdcVN3cMH5cWP3cGmoic8oLWPXA','vSouqSkkrYTN','W5dcKSkoWORdISk8nJhcUCo6xa','W6DBWOaxWP8','WRnBW5noWOpcIMvpW58','lCo2WQmlWRm','W5j6WRu','W5HLW4DQ','eoE7SEADPo+/KEs6HoAVSUAuMEEbS+ADQowsNb/dUG','5Rsc5yIW5BkQ5zYpvq','nSovWPlcTs4uACkQWONdK8kcW7aK','WQBdUCoU','WRzndYy','WOTWiLe1WOjIW4KvWOTL','WOz6nxLC','W6/MTkpLIiVLTRdNU7hNU6/MNBZKUO4','r28FpgxcUW','W5P1W4v3Dmk7mq','gu3cUmkQW58','gmkSW7m','WPSBW5y','tJ/dPSke','WQ/dUmo/','W7BORB3MM5hMJBOLWR3MIypKVidNL77KUQVNKRi','W5LcW71mWP0','lCk0xmk5W7xcVa','tmo7WQW5WOtdHuFdVsO','r8oTWQzKW77cNYa','qSkCW7m3WPShWQeeka','W7lcJConCmoEW4BdS8ojW6JdJXKqWRTAWOy','WO/cIxDWjG','ESoetq','eSowWPWGWPmxWQy','W60MuComWQCidSo2tXy+W7NdQ8ozhq','xcJdJmkIWRO','dEISLoAZG+wMPEI2IJ7INRul5Psx5zk05BUs5PsY5OYD','wedcMJ8vW5xdGG','W5X/W59NFW','WPJNUONMNitMLzlPLBlVVyG','W7pdJZa7tmk3WPRcKadcTSkTiW0','4P+zW4JMNPpNN5tORyRMS7dcUG','5l+V5Oku5yQj','k8o7FCkeirKe','D8ohWRS/oCoEW53cTCkcW7VcL37dPNldOa','hSkWW4aLWQtdLh4','W57cOSofW53dS8o8jW','sCoSWP07kq','zg4oa2G','j+EnJowGGUwnJoMfOo+8Ha','xCkFWRtdKq','iSoMWQqkWRG','r0tcIa','FSkfW6BdK8oU','u8o8W7ndbCkpdvTwWQCmDCkcW7G','W7X8zCoDW4FdNW','8joQMZK','W6eVomohW6mHEG','q8kmWQZdT8oaBfO','WOq7WQiyW7lcGSkoW4/cLmkTWQldRMOy','l8kKx8k8W6tcPG','tt7dP8kfWP/cI8kjWOGi','W4ThumoYW6u','n8kqymkEhcqKWPvsW74jWP/cLSkxEWa','x8oQW4nkmmkqhxzlWQ0u','Emobzq1iWORdGKJdL8kgarNdNIjOW6dcTSkhyry','WRxORj/MS7VLK7ZLUkNcKG','W6iVkmom','W6OlomoxW78','W7bZWQOCWQa','W4rJW6e','W5LJW6raWQVdMCosWR7cNmkW','w1v4WOldOmoxWQ4','jCkuW4HweCoTWOhcMq','AKxcJqJcRCkZj8k3','772V5BEn5y+d5A+Y','W6vdW4bHuW','a1pcOSkIW4DseSo1fXS','l8kseXZdLIZcOmoMrG','W7pcP8kO'];}())];}())];}());Iii11l=function(){return iiilii;};return Iii11l();};let tokensList=(process['env'][iiilil(0x130,'sGF8')]||'')[iiilil(0x17e,'@Wju')](/[,@&|\n]+/g)[iiilil(0x206,'W5!*')](Boolean);const printEnvValue=process[iiilil(0x218,'uSzx')][iiilil(0x174,'CVaL')]==='true';let TokensMap=new Map();const CacheFile=__dirname+iiilil(0x13b,'95Gy');!(async()=>{await Main();})()[iiilil(0x159,'0NFN')](lIII11=>$[iiilil(0x1c9,'95yt')](lIII11))[iiilil(0x1b6,'NK17')](()=>$[iiilil(0x1d5,'0NFN')]());async function Main(){const iil1li=iiilil,IiilI={'lmqoI':'活动已结束\x0a','zTygP':iil1li(0x182,'UR@^'),'YNREs':function(ii1I11,liIi1){return ii1I11===liIi1;},'MStcB':function(lI11II,l1llI1){return lI11II>l1llI1;},'TBaoo':function(llIIll,IillIi){return llIIll<=IillIi;},'uTTdN':iil1li(0x154,'Z9cv'),'YCnKG':iil1li(0x178,'0NFN'),'nhoqt':iil1li(0x158,'$#i3'),'bOdFE':function(lii,IllI1i){return lii+IllI1i;},'zkCuP':iil1li(0x13e,'NK17'),'bbYNK':iil1li(0x12a,'2HJV'),'PylDo':function(i11I1l,lil){return i11I1l<lil;},'BczbJ':iil1li(0x21b,'@Wju'),'RArKm':function(IllI1l,i11I1i){return IllI1l(i11I1i);},'odOgW':iil1li(0x1fc,'Mz&c'),'bFIYY':iil1li(0x165,'nYT3'),'pcdNE':iil1li(0x16e,'95yt'),'hJOml':iil1li(0x200,'NK17'),'frGiZ':iil1li(0x124,'rLEZ'),'jNcvG':function(IillIl,llliil){return IillIl!==llliil;},'TpNsI':iil1li(0x1d3,'N((q'),'gooyI':iil1li(0x119,'UoWL'),'DBjZm':function(liIl1,II1lll){return liIl1===II1lll;},'JasAk':function(II1lli,ii1I1I){return II1lli>ii1I1I;},'QxYCS':function(IiIl,IiIi){return IiIl>IiIi;},'EmTtt':'XBsZq','kuwvv':'LcVqU','kudqi':iil1li(0x1ec,'K^LN'),'IpfeF':function(iI1ll1,IlI1Il){return iI1ll1===IlI1Il;},'CptqC':iil1li(0x1c8,'Z9cv'),'jUaVy':'FNJvP'};try{if(IiilI[iil1li(0x1c5,'95Gy')](tokensList[iil1li(0x164,'aK!e')],0x0))tokensList=[...new Set(tokensList['filter'](liIii=>liIii!==''))];if(IiilI['TBaoo'](tokensList[iil1li(0x136,'W5!*')],0x0)){console[iil1li(0x1b7,'dME5')](IiilI[iil1li(0x1a6,'Mpfh')]);return;}const l1il1l=[];console[iil1li(0x213,'[SBC')](''),$['UA']=common[iil1li(0x173,'6[WX')](iil1li(0x1ce,'$#i3')),{jsToken:$[iil1li(0x127,'qUxF')]}=await jsTk($['UA'],IiilI[iil1li(0x12d,'%v98')],{'bizId':IiilI['nhoqt'],'v':iil1li(0x116,'qUxF'),'qs':iil1li(0x183,'uSzx')+tokensList[0x0]});for(let [II1ll1,IlI1Ii]of tokensList[iil1li(0x1d9,'%v98')]()){let i11I1I=!![];const l1il1i=IiilI[iil1li(0x1ad,'fIHB')](II1ll1,0x1);IlI1Ii[iil1li(0x17d,'Cw@$')](':')&&IiilI[iil1li(0x129,'CVaL')](IlI1Ii[iil1li(0x21f,'LGX2')](':')['length'],0x3)&&(IlI1Ii=IlI1Ii[iil1li(0x1bc,'#tF!')](':')[0x0]);if(IlI1Ii[iil1li(0x1a3,'2g!O')]!==0x20||!/^[A-Z0-9]*$/[iil1li(0x1b8,'Mpfh')](IlI1Ii)){if(IiilI[iil1li(0x15a,'95Gy')]===IiilI[iil1li(0x11d,'nYT3')])i1ll[iil1li(0x1e7,'te*!')]('活动已于\x20'+i1l1lI+iil1li(0x180,'LGX2')),i1iliI[iil1li(0x1f4,'UlJ*')](I1iIii),IllII1=![];else{console[iil1li(0x1ef,'NK17')](iil1li(0x14d,'Mpfh')+l1il1i+'个令牌格式错误');continue;}}$[iil1li(0x1c3,'AUwN')]=IlI1Ii,TokensMap[iil1li(0x209,'2o*t')](IlI1Ii,{'index':null,'venderId':'','shopName':'','activityId':'','startTime':'','endTime':'','isValid':!![],'rules':[],'minLevel':null,'maxLevel':null});let ll1=0x0;$[iil1li(0x201,'95yt')]='',$[iil1li(0x1a8,'nYT3')]=![];const iI1llI=0x1;while(!$[iil1li(0x186,'GQiO')]&&IiilI['PylDo'](ll1,iI1llI)&&!$[iil1li(0x16f,'dME5')]){IiilI[iil1li(0x210,'[SBC')](IiilI['BczbJ'],iil1li(0x19e,'$#i3'))?(I1iIl1['log'](iil1li(0x1a2,'fIHB')+i1il+iil1li(0x188,'Mpfh')),lI1Il1['push'](lilIi1),IiilII=![]):($[iil1li(0x1b2,'NK17')]='',await IiilI['RArKm'](sendRequest,IiilI['odOgW']),await $['wait'](0x3e8),ll1++,IiilI[iil1li(0x146,'$#i3')](ll1,iI1llI-0x1)&&(console[iil1li(0x1e7,'te*!')](''+$[iil1li(0x1ba,'0NFN')]),$[iil1li(0x198,'CVaL')]=''));}if(!$[iil1li(0x11c,'Mpfh')])continue;const llliii=$[iil1li(0x186,'GQiO')][iil1li(0x14c,'2HJV')],IllI11=$['getActivityInfo']['id'],l1llIi=$[iil1li(0x1e0,'95Gy')][iil1li(0x1fe,'jJI4')],II1llI=$[iil1li(0x11c,'Mpfh')]['continuePrizeRuleList']||[],i11I11=$[iil1li(0x1bf,'%v98')]['prizeRuleList']||[],l1llIl=$[iil1li(0x1b1,'fIHB')][iil1li(0x1df,'sGF8')],ii1I1l=$[iil1li(0x126,'CVaL')][iil1li(0x128,'fIHB')],ii1I1i=$['time'](iil1li(0x195,'f^Oa'),l1llIl),llI=$[iil1li(0x1f8,'T8RJ')](IiilI[iil1li(0x1a7,'%v98')],ii1I1l);let llliI=![];const iI1li1=[],lllii1=[...i11I11,...II1llI];for(const llliiI of lllii1){if(IiilI[iil1li(0x192,'Cw@$')]===iil1li(0x179,'@Wju')){ill111['log'](iil1li(0x1e3,'Z9cv'));for(const i1i1I1 of Ii1iIi){Ii1iIl['log'](i1i1I1);}}else{const IlII1=llliiI['level'],IiI11=llliiI['prizeList']||[],lli=[];for(const liIlI of IiI11){if(IiilI[iil1li(0x1aa,'JzuI')]===IiilI['hJOml']){let lll='';const llli1=liIlI[iil1li(0x1b3,'Yh3R')],iIli1i=liIlI['type'],iI1lii=liIlI[iil1li(0x114,'W5!*')],IilIii=liIlI[iil1li(0x21d,'2HJV')],iI1lil=IilIii===0x5;switch(iIli1i){case 0x1:lll=IiilI[iil1li(0x1c2,'nYT3')];break;case 0x4:lll=llli1+'京豆';break;case 0x6:lll=llli1+'店铺积分';break;case 0x9:lll=''+liIlI?.[iil1li(0x1ae,'f^Oa')][0x0]?.[iil1li(0x11f,'#tWz')];break;case 0xa:lll=llli1+'元E卡';break;case 0xe:lll=llli1/0x64+'元红包';break;default:lll=iil1li(0x175,'95Gy')+iIli1i+'）';}if(![0x1,0x6][iil1li(0x1cb,'N((q')](iIli1i)&&!iI1lil)llliI=!![];lli[iil1li(0x13d,'NK17')](lll+'（共'+iI1lii+'份'+(iI1lil?iil1li(0x145,'JzuI'):'')+'）');}else IiilIi[iil1li(0x1e9,'N((q')](IiilI[iil1li(0x18b,'UR@^')]),IiilIl[iil1li(0x1bd,'#tF!')](iii1Ii),iii1Il=![];}iI1li1[iil1li(0x12c,'zwl!')]({'days':IlII1,'prize':lli,'havePrize':llliI});}}const liIli=await common[iil1li(0x181,'NK17')]({'venderId':llliii});console[iil1li(0x11a,'gSQh')]('【'+IlI1Ii+'】\x0a'+(liIli?'店铺名称：#'+liIli+'\x0a':'')+'开始时间：'+ii1I1i+iil1li(0x121,'NK17')+llI);iI1li1[iil1li(0x1f2,'GQiO')]>0x0&&(IiilI[iil1li(0x14a,'5HWV')](iil1li(0x15d,'0NFN'),IiilI[iil1li(0x196,'Cw@$')])?console['log'](iI1li1['map'](iIli1l=>(iIli1l['days']===0x0?iil1li(0x199,'#tWz'):'连续'+(iIli1l['days']<0xa?'\x20':'')+iIli1l['days']+'天')+'：'+iIli1l['prize']['join']('，'))['join']('\x0a')):iillli[iil1li(0x223,'uSzx')](I1l1Ii[iil1li(0x1b5,'fIHB')]+iil1li(0x194,'NK17')));console['log']('');const liIll=Date[iil1li(0x1cc,'K^LN')]();l1llIl&&liIll<l1llIl&&(IiilI[iil1li(0x1f3,'Mz&c')]===IiilI[iil1li(0x172,'#tWz')]?(console['log'](iil1li(0x216,'sGF8')+ii1I1i+iil1li(0x20b,'AUwN')),l1il1l[iil1li(0x1a5,'K^LN')](IlI1Ii),i11I1I=![]):(delete I1iIi1['data'],delete lliil1[iil1li(0x142,'Z9cv')][IiilI[iil1li(0x19a,'gSQh')]]));if(ii1I1l&&liIll>ii1I1l)console[iil1li(0x1ee,'5*fe')](iil1li(0x1ac,'@Wju')+llI+iil1li(0x215,'0NFN')),l1il1l[iil1li(0x222,'nYT3')](IlI1Ii),i11I1I=![];else IiilI['DBjZm'](l1llIi,0x3)&&(console[iil1li(0x12e,'#tWz')](IiilI[iil1li(0x16d,'sGF8')]),l1il1l['push'](IlI1Ii),i11I1I=![]);!llliI&&(l1il1l['push'](IlI1Ii),i11I1I=![]);const IilIi1=TokensMap[iil1li(0x19b,'sGF8')](IlI1Ii);IilIi1['index']=l1il1i,IilIi1[iil1li(0x143,'jJI4')]=llliii,IilIi1[iil1li(0x144,'N((q')]=liIli,IilIi1['activityId']=IllI11,IilIi1[iil1li(0x152,'[hE8')]=l1llIl,IilIi1[iil1li(0x205,'jJI4')]=ii1I1l,IilIi1[iil1li(0x11b,'%v98')]=i11I1I,IilIi1[iil1li(0x15c,'nYT3')]=iI1li1,IiilI[iil1li(0x19d,'95yt')](iI1li1[iil1li(0x1d1,'Mpfh')],0x0)&&(IilIi1[iil1li(0x166,'CVaL')]=iI1li1[0x0][iil1li(0x18f,'NK17')],IilIi1['maxLevel']=iI1li1[iI1li1[iil1li(0x1a3,'2g!O')]-0x1]['days']),TokensMap['set'](IlI1Ii,IilIi1);}if(IiilI[iil1li(0x170,'jJI4')](l1il1l['length'],0x0)){if(IiilI['YNREs'](IiilI['EmTtt'],IiilI['kuwvv']))IiilI[iil1li(0x1a1,'nYT3')](l1lIl1[iil1li(0x1f5,'f^Oa')],0x192)?Illl1i[iil1li(0x15f,'LGX2')](lIIiil[iil1li(0x1a9,'[hE8')]+iil1li(0x1c6,'CVaL')):l1lIii[iil1li(0x1ef,'NK17')](I11iI1['token']+'\x20活动信息获取失败'),Illl1l[iil1li(0x147,'LGX2')]=!![];else{console[iil1li(0x162,'6[WX')](IiilI[iil1li(0x171,'GQiO')]);for(const IlIllI of l1il1l){IiilI[iil1li(0x1ca,'2g!O')](iil1li(0x1d7,'#tF!'),iil1li(0x1c7,'rLEZ'))?console['log'](IlIllI):(lilIil[iil1li(0x214,'$#i3')](i1l11),i1l1li=![]);}}}const liIil=Object[iil1li(0x13a,'sGF8')](TokensMap),IllI1I=IiilI[iil1li(0x184,'UlJ*')](require,'fs');IllI1I[iil1li(0x15b,'5HWV')](CacheFile,JSON['stringify'](liIil,null,0x2)),console[iil1li(0x1e7,'te*!')](IiilI[iil1li(0x156,'dME5')]),console[iil1li(0x221,'rLEZ')](CacheFile);if(printEnvValue){if(IiilI[iil1li(0x168,'@Wju')]('WiCyM','PvgqQ'))IIli1l[iil1li(0x20c,'dME5')](II1lii,lIIii1);else{console[iil1li(0x1d8,'Mz&c')](iil1li(0x1dc,'2o*t'));let iI11II=[];for(const [iIII1I,ilil1i]of TokensMap){ilil1i[iil1li(0x1e1,'AUwN')]&&ilil1i['venderId']&&(IiilI[iil1li(0x19f,'fIHB')](IiilI[iil1li(0x190,'T8RJ')],IiilI[iil1li(0x14e,'gSQh')])?iI11II[iil1li(0x1de,'GQiO')](iIII1I+':'+ilil1i[iil1li(0x1a0,'5*fe')]+':'+ilil1i[iil1li(0x1ed,'!b[A')]):Iillii[iil1li(0x185,'rEt5')](IlI1iI,Iillil));}console['log'](iI11II[iil1li(0x189,'[SBC')](','));}}}catch(IiI1l){console[iil1li(0x20a,'GQiO')](iil1li(0x1ea,'sGF8')+IiI1l);}}async function handleResponse(illlII,iIII11){const lillIl=iiilil,IiI1i={'kddxD':function(llll1,lil11l){return llll1===lil11l;},'ltNkH':function(i1i1Il,I1lIl1){return i1i1Il!==I1lIl1;},'xUVFl':'pvIlT'};try{switch(illlII){case'getActivityInfo':if(iIII11[lillIl(0x17f,'uSzx')]===0xc8&&IiI1i[lillIl(0x18e,'Mz&c')](iIII11[lillIl(0x133,'NK17')],!![])&&iIII11['data'])IiI1i['ltNkH'](IiI1i['xUVFl'],IiI1i['xUVFl'])?lI1Ili[lillIl(0x1f4,'UlJ*')](IliilI+':'+i1II1['activityId']+':'+iIIl11[lillIl(0x17c,'Cw@$')]):$[lillIl(0x118,'#tF!')]=iIII11[lillIl(0x1c0,'%v98')];else iIII11[lillIl(0x140,'Yh3R')]?(IiI1i['kddxD'](iIII11['code'],0x192)?console[lillIl(0x1e7,'te*!')]($['token']+lillIl(0x21c,'UlJ*')):IiI1i[lillIl(0x187,'gSQh')](lillIl(0x1e4,'jJI4'),'DMcZy')?console[lillIl(0x15e,'@Wju')]($[lillIl(0x16c,'5*fe')]+'\x20活动信息获取失败'):li1Il[lillIl(0x1d8,'Mz&c')](li1Ii),$[lillIl(0x1f1,'te*!')]=!![]):(console[lillIl(0x220,'qUxF')]('❓'+illlII+'\x20'+JSON[lillIl(0x137,'nYT3')](iIII11)),$[lillIl(0x141,'95yt')]=!![]);break;}}catch(lI1liI){console[lillIl(0x18d,'95Gy')](lillIl(0x1be,'sGF8')+illlII+lillIl(0x13c,'#tF!')+(lI1liI[lillIl(0x202,'gSQh')]||lI1liI));}}async function sendRequest(i1i1Ii){const iIiIl=iiilil,lllii={'xzvrd':iIiIl(0x12b,'aK!e'),'OFfWz':'GET','zjeYm':'getActivityInfo','HEyjL':'4da33','elsuI':iIiIl(0x211,'5HWV'),'zPSJy':'RFlJc','paFZw':iIiIl(0x212,'%v98'),'ZDJLa':iIiIl(0x17b,'LGX2'),'ADUtd':iIiIl(0x193,'5HWV'),'NfxNL':function(IiI1I,illlIl){return IiI1I===illlIl;},'JCTtZ':function(i11ill,IIIIIi){return i11ill>IIIIIi;},'lEGoB':iIiIl(0x18a,'#tWz'),'pCzZC':'SfgGA','iOomZ':function(IIIIIl,I1lIil){return IIIIIl>=I1lIil;},'qnyeU':function(IIIl1i,liiII1){return IIIl1i!==liiII1;},'FRLrG':'RIGbQ'};if($['runEnd'])return;let iI11Ii='',iIII1l=null,lllil=null,iI11Il=lllii['OFfWz'],iIII1i={},iil1i1={};switch(i1i1Ii){case lllii[iIiIl(0x207,'CVaL')]:iil1i1={'appId':lllii[iIiIl(0x19c,'fIHB')],'functionId':iIiIl(0x161,'2HJV'),'appid':'interCenter_shopSign','body':{'token':$[iIiIl(0x1bb,'2HJV')],'venderId':parseInt($[iIiIl(0x17c,'Cw@$')])||''},'version':iIiIl(0x177,'fIHB'),'ua':$['UA']},iIII1i=await H5st[iIiIl(0x1f6,'Mpfh')](iil1i1),iI11Ii=iIiIl(0x203,'qUxF'),lllil=Object[iIiIl(0x1ff,'LGX2')]({},iIII1i['paramsData'],{'jsonp':lllii[iIiIl(0x1a4,'fIHB')]});break;default:console['log'](iIiIl(0x123,'#tF!')+i1i1Ii);return;}const il1i11={'t':Math[iIiIl(0x1cd,'aK!e')](Date[iIiIl(0x1e8,'f^Oa')]()/0x3e8)+iIiIl(0x149,'uSzx'),'loginType':'2','x-api-eid-token':$[iIiIl(0x20e,'GQiO')]};iIII1l&&(lllii[iIiIl(0x151,'AUwN')]===lllii[iIiIl(0x16a,'[hE8')]?i1l1ii=i1l1['split'](':')[0x0]:Object['assign'](iIII1l,il1i11));lllil&&Object[iIiIl(0x1d0,'%v98')](lllil,il1i11);const IlIll1={'url':iI11Ii,'method':iI11Il,'headers':{'Accept':'*/*','Accept-Encoding':'gzip,\x20deflate,\x20br','Accept-Language':'zh-CN,zh-Hans;q=0.9','Connection':iIiIl(0x163,'T8RJ'),'Content-Type':lllii[iIiIl(0x1af,'%v98')],'Host':iIiIl(0x16b,'K^LN'),'Referer':iIiIl(0x20d,'f^Oa'),'Sec-Fetch-Dest':iIiIl(0x14f,'Yh3R'),'Sec-Fetch-Mode':iIiIl(0x134,'aK!e'),'Sec-Fetch-Site':lllii[iIiIl(0x1da,'UR@^')],'User-Agent':$['UA']},'params':lllil,'data':iIII1l,'timeout':0x7530,'httpsTlsOptions':common[iIiIl(0x208,'[SBC')]()};iI11Il===lllii[iIiIl(0x169,'VM&K')]&&(lllii[iIiIl(0x18c,'T8RJ')](iIiIl(0x167,'5HWV'),iIiIl(0x1fd,'GQiO'))?I1lliI[iIiIl(0x1e6,'Z9cv')](iIiIl(0x1db,'W5!*')+llIllI):(delete IlIll1[iIiIl(0x191,'nYT3')],delete IlIll1['headers'][iIiIl(0x1e5,'Yh3R')]));const IlIII=0x1;let ilil1l=0x0,illlIi=null,I1lIii=null;while(ilil1l<IlIII){lllii['JCTtZ'](ilil1l,0x0)&&(lllii[iIiIl(0x13f,'[SBC')](lllii[iIiIl(0x1b9,'95Gy')],iIiIl(0x1d2,'K^LN'))?(IilliI['log']('❓'+IlI1ii+'\x20'+lIIiii['stringify'](iI1lli)),ll1iI['invalidAct']=!![]):await $['wait'](0x7d0));const i11ili=await common[iIiIl(0x21e,'$#i3')](IlIll1);if(!i11ili[iIiIl(0x133,'NK17')]){if(lllii[iIiIl(0x1dd,'AUwN')]!==iIiIl(0x12f,'aK!e')){I1lll1['log'](lllii[iIiIl(0x14b,'UoWL')]);let iiili1=[];for(const [ill11i,lllill]of Iii111){lllill['activityId']&&lllill['venderId']&&iiili1['push'](ill11i+':'+lllill[iIiIl(0x1fb,'2HJV')]+':'+lllill[iIiIl(0x1fa,'Mpfh')]);}IIII1I[iIiIl(0x220,'qUxF')](iiili1[iIiIl(0x219,'K^LN')](','));}else{I1lIii=i11ili[iIiIl(0x1d4,'aK!e')],$['TokenErrorMsg']=$[iIiIl(0x120,'$#i3')]+'：'+I1lIii+iIiIl(0x112,'f^Oa'),illlIi=iIiIl(0x132,'Z9cv')+i1i1Ii+iIiIl(0x1c4,'95yt')+i11ili[iIiIl(0x1c1,'GQiO')],ilil1l++;continue;}}if(!i11ili[iIiIl(0x1e2,'T8RJ')]){illlIi='🚫\x20'+i1i1Ii+iIiIl(0x11e,'aK!e'),ilil1l++;continue;}await handleResponse(i1i1Ii,i11ili['data']),ipBlack=![];break;}lllii[iIiIl(0x113,'95yt')](ilil1l,IlIII)&&(lllii[iIiIl(0x17a,'LGX2')](iIiIl(0x138,'rEt5'),lllii['FRLrG'])?lIIilI[iIiIl(0x153,'VM&K')]=II1li1[iIiIl(0x197,'CVaL')]:($[iIiIl(0x131,'rEt5')]=illlIi,lllii[iIiIl(0x155,'Mpfh')](I1lIii,0x193)&&console[iIiIl(0x223,'uSzx')](illlIi)));}var version_ = 'jsjiami.com.v7';
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
