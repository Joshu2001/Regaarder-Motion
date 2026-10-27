p='dist/continuation.js';s=open(p).read()
s=s.replace("peopleSize:95", "peopleSize:110").replace("peopleZoom:1.9", "peopleZoom:2.25")
s=s.replace("blurRegion:{x:", "parallaxTime:12,cameraZoom:1.8,cameraRise:100,cloudSpeed:35,logoFade:3,redSpeed:4,redColor:'#d84e61',endBlue:'#58758f',warpTime:1.3,warpPower:70,extraFires:[],baseFireX:0,baseFireY:0,blurRegion:{x:")
s=s.replace("shoulder:'assets/shoulder.png'", "shoulder:'assets/shoulder-v3.png',deskLamp:'assets/desk-lamp-v3.png',clouds:'assets/clouds.png'")
s=s.replace("people:'assets/pair-v2.png',leftPortrait:'assets/pair-v2.png',rightPortrait:'assets/pair-v2.png'", "people:'assets/faces-v3.png',leftPortrait:'assets/faces-v3.png',rightPortrait:'assets/faces-v3.png'")
s=s.replace("return {tear,zoomDuration,lamp,dark,fire,people,outdoor,end:outdoor+Number(fx.outdoorReveal)+3}", "const parallax=outdoor+Number(fx.outdoorReveal),logos=parallax+Number(fx.parallaxTime)*.35,red=parallax+Number(fx.parallaxTime)*.65,warp=parallax+Number(fx.parallaxTime)+Number(fx.redSpeed)+2;return {tear,zoomDuration,lamp,dark,fire,people,outdoor,parallax,logos,red,warp,end:warp+Number(fx.warpTime)}")
s=s.replace("['lampSize','Lamp size',60,140,1,'Small','Large']", "['deskReveal','Lower desk reveal',1,6,.2,'Quickly','Slowly']")
s=s.replace("lampSize:100", "lampSize:100,deskReveal:3")
s=s.replace("};let activeEffect='tears';", " ,camera:{title:'Rise through the scene.',description:'People move past the camera while the clouds drift left.',main:[['cameraZoom','Camera zoom',1,2.5,.05,'Gentle','Close'],['cloudSpeed','Cloud drift',0,100,1,'Still','Faster']],more:[['cameraRise','Camera rise',30,130,1,'Low','High'],['parallaxTime','Move time',6,22,.5,'Quickly','Slowly']]},finish:{title:'Pull into the next chapter.',description:'Logos emerge. Red meets blue. A brief lens pull ends the scene.',main:[['redSpeed','Red slide time',1,8,.2,'Quickly','Slowly'],['warpPower','Lens pull strength',0,100,1,'Subtle','Strong']],more:[['logoFade','Logo reveal time',.5,6,.1,'Quickly','Slowly'],['warpTime','Lens pull time',.5,3,.1,'Quickly','Slowly']]}\n};let activeEffect='tears';")
s=s.replace("blur:'Blur'}[key]", "blur:'Blur',camera:'Camera',finish:'Finish'}[key]")
s=s.replace("blur:d.outdoor+Number(fx.outdoorReveal)}[key]", "blur:d.outdoor+Number(fx.outdoorReveal),camera:d.parallax,finish:d.red}[key]")
s=s.replace("im.src.endsWith('/pair-v2.png')", "(im.src.endsWith('/pair-v2.png')||im.src.endsWith('/faces-v3.png'))")
s=s.replace("const w=(side?410:355)*size,h=500*size,x=(side?450:300),y=10", "const w=(side?450:390)*size,h=550*size,x=(side?405:205),y=-55")
# Replace separate glowing lamp and desk with the naturally lit photo and a progressive body reveal.
a=s.index("const light=fx.light/100*lampProgress");b=s.index("ctx.restore();renderOutdoor",a)
s=s[:a]+'''const light=fx.light/100*lampProgress*(1-fx.flicker/100*(.5+.25*Math.sin(secs*12)+.25*Math.sin(secs*21.3)));if(lampProgress>0&&ready(sprites.deskLamp)){const ds=fx.deskSize/100;ctx.save();ctx.globalAlpha=lampProgress;ctx.filter=`brightness(${.55+light*.65})`;const body=ease((secs-d.lamp-1.2)/fx.deskReveal);ctx.beginPath();ctx.rect(0,0,960,345+body*220);ctx.clip();const drift=70*ease((secs-d.people)/fx.peopleZoomTime);ctx.drawImage(sprites.deskLamp,480-350*ds+drift*.3,128-(ds-1)*150+drift*.2,700*ds,430*ds);ctx.restore()}
''' +s[b:]
# Main fire placement offsets. Additional independently placed filmed layers are drawn by the extension.
s=s.replace("ctx.save();ctx.globalCompositeOperation='screen';ctx.globalAlpha=strength;const shift=", "ctx.save();ctx.translate(fx.baseFireX,fx.baseFireY);ctx.globalCompositeOperation='screen';ctx.globalAlpha=strength;const shift=")
# Give blur a stable full outdoor view even with a longer epilogue.
s=s.replace("t=(phaseTimes().end-.1)/settings.duration", "t=(phaseTimes().parallax-.1)/settings.duration")
open(p,'w').write(s)
