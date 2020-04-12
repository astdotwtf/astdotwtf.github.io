const techno_images = [
  "https://66.media.tumblr.com/074940807315ec1eb323f5267da70636/tumblr_nz1gje6t1T1rqbtm2o1_500.gif", // blinking phone
  "https://66.media.tumblr.com/a7dd826e84895bbeb86a433ddd6ba55c/tumblr_nwl07maB3a1t0jpgqo1_500.gif", // wheel spin
  "https://66.media.tumblr.com/4659be7345beec714e09b7999ac8b24a/tumblr_o8edv24HWm1qg39ewo1_500.gif", // lightning
  "https://66.media.tumblr.com/tumblr_mdql85hdBe1rdz01xo1_500.gif", // warning
  "https://66.media.tumblr.com/8211860cfb8be377f41ddc5bf614e1ad/tumblr_nrdhfo7EXT1qfg94wo1_500.gif", // brain?
  "https://66.media.tumblr.com/3a106191eb3ed187725379190b29a48a/tumblr_ps5yn4qCgt1w3kxp1o1_540.gif", // anime
  "https://d2w9rnfcy7mm78.cloudfront.net/3660142/original_095f3a42d8e18344947d68842c4eefde.gif", // whatever
  "https://d2w9rnfcy7mm78.cloudfront.net/3655603/original_a3a6f55794796a31558ea189793fa91d.gif", // movement
  "https://d2w9rnfcy7mm78.cloudfront.net/2089709/original_7c9f18a6433601f98a0baff468804ba9.gif", // google maps
  "https://78.media.tumblr.com/24a228370932b6a51e78863dd712b670/tumblr_nse25brZ6G1sbxdzlo1_500.gif", // poetry
  "https://d2w9rnfcy7mm78.cloudfront.net/3244045/original_921b3032ab2e66602d432603d79b0197.gif", // code tunnel
  "https://d2w9rnfcy7mm78.cloudfront.net/2408735/original_8b13d55e059b2f5af2dc44c8b3fbb2ee.gif", // light
  "https://d2w9rnfcy7mm78.cloudfront.net/3244042/original_a551db7a701f49506b3af847c03fd93e.gif", // globe
  "https://66.media.tumblr.com/353384ff54cae120a60c054bc727dedf/tumblr_of4dirO18y1u0c1b5o1_540.gif", // white noise
  "https://d2w9rnfcy7mm78.cloudfront.net/3655640/original_b920ae088b4ad5a294eb1ca603113c22.gif", // face
  "https://d2w9rnfcy7mm78.cloudfront.net/3660143/original_9d9213ac30f5c29176a479142926734a.gif", // samurai jack
  "https://d2w9rnfcy7mm78.cloudfront.net/1864782/original_033d8c14ce89231a81a1ea2957401173.gif", // jack nic
  "https://66.media.tumblr.com/24b200f1f1251fbd7840442d0e5ba6fe/tumblr_pigzajYld51tjkzwpo1_540.gif", // TVs
  "https://d2w9rnfcy7mm78.cloudfront.net/1735349/original_9e4a83b5edf596cb829e3c513a59e6a8.gif", // diver
  "https://78.media.tumblr.com/d35608e4289af2238fc7090dbf69a0ba/tumblr_owkzavANcS1u5k06fo1_500.gif", // keep out
  "https://66.media.tumblr.com/260dc3315dcad5b25be04dc6924892e6/tumblr_my6rwtffm01qg39ewo1_500.gif", // light
  "https://66.media.tumblr.com/784eede0dd1d1999c607c5ee977c43de/tumblr_n6z471GAbf1t0tqueo1_500.gif", // dude skull
  "https://66.media.tumblr.com/fb485e1bc9d89f89d755846f85a40557/tumblr_oih27yzyJL1six59bo1_540.gif", // circle dots
  "https://d2w9rnfcy7mm78.cloudfront.net/549661/original_281370fbfcefc25df35c88f70a76b418.gif", // bridge
  "https://d2w9rnfcy7mm78.cloudfront.net/2131961/original_10db626677c0d8df06348a51a69aa9f7.gif", // circles
  "https://d2w9rnfcy7mm78.cloudfront.net/2886080/original_24abc1035d71cf1d1377ed6e51f4e610.gif", // loading
  "https://d2w9rnfcy7mm78.cloudfront.net/1703752/original_971971ad6791b08ee0dca776f07ced27.gif", // legumes
  "https://66.media.tumblr.com/0c81d51b719b4a17ede8d7724976bf24/tumblr_nwta35GfoP1tls8aro1_1280.gif", // color white noise
  "https://66.media.tumblr.com/5197b214a797ce8b37b9fe6026c3cbd9/tumblr_noiwewBBmu1u6x3syo1_r1_540.gif", // dancers
  "https://d2w9rnfcy7mm78.cloudfront.net/3655604/original_ff61a2acefc8df5f3362511f935bf811.gif", // comet
  "https://66.media.tumblr.com/16d17bd5c405ee3e352c45de0bf85b85/tumblr_oooul7Fp4L1slaspwo1_500.gif", // skull
  "https://66.media.tumblr.com/f8511f0bf045986a2c5ef911dae2aaff/tumblr_nfj205fTFr1qe8ju4o1_500.gif", // blocked channel
  "https://d2w9rnfcy7mm78.cloudfront.net/1719350/original_87148b857ed172bb97dde4099cee5f6d.gif", // sideways rectangle
  "https://d2w9rnfcy7mm78.cloudfront.net/2125483/original_e6ea3f4596f106ab55ee474f7977abb2.gif", // hands in water
  "https://78.media.tumblr.com/c4bcb23b7c5eab24e85fa3ef08c816b4/tumblr_mw6dz9Nfho1s8rlddo1_500.gif", // gas masks
  "https://d2w9rnfcy7mm78.cloudfront.net/2141201/original_503c7b827a0642ec6bf7a492deb9a0ff.gif", // illustration
  "https://66.media.tumblr.com/bd7f6e59171c1a65109b7daf7af897aa/tumblr_pcjaq5nB9x1w3y4ilo2_500.gif", //moving planets
  "https://d2w9rnfcy7mm78.cloudfront.net/1953331/original_33f55b289869d524d1fad7b084d4aec5.gif", // blue light
  "https://66.media.tumblr.com/1ff7858f4d28b33e367f3db97bbbf91b/tumblr_nmciwxQcZ01ql8t12o1_500.gif", // night lights
  "https://d2w9rnfcy7mm78.cloudfront.net/3666271/original_fef01aec80bf782581be0ac329043727.gif", // color tunnel
  "https://d2w9rnfcy7mm78.cloudfront.net/3660140/original_cd232121c3bcba6a0a10536cef4d1055.gif", // lines
  "https://78.media.tumblr.com/6af49747c79dc7a335b085965469e726/tumblr_nnpftf8equ1qd479ro1_640.gif", // emergency lights
  "https://d2w9rnfcy7mm78.cloudfront.net/2594794/original_8c6b91e684e54afaec331eca1aa0e294.gif", // dots
  "https://d2w9rnfcy7mm78.cloudfront.net/1952533/original_78e62570e9d5dcf9d5cc217fef4d675a.gif", // animation page
  "https://66.media.tumblr.com/50edc9b202f97c3302504b2d5d0fc704/tumblr_oc48fvTO021rwdf4uo1_400.gif", // skull
  "https://d2w9rnfcy7mm78.cloudfront.net/571930/original_06fe32506233bc6dccb2250c28ce17f0.gif", // smoke bomb kick
  "https://d2w9rnfcy7mm78.cloudfront.net/2328592/original_2c1bd34a1f79b4de68a89841d643729f.gif", // face
  "https://d2w9rnfcy7mm78.cloudfront.net/2258564/original_9620f65ee5b0543582afe49bbffde287.gif", // space flow
  "https://d2w9rnfcy7mm78.cloudfront.net/2394557/original_778954dd6cb23bd580b75f1104b4cdb4.gif", // street
  "https://d2w9rnfcy7mm78.cloudfront.net/1769511/original_e3bf59229fa7e197da41b6353690640f.gif", // glitch
  "https://d2w9rnfcy7mm78.cloudfront.net/1864733/original_5aac4af34e2e6619ca34049b0e0d1a57.gif", // running from fire?
  "https://d2w9rnfcy7mm78.cloudfront.net/3664242/original_c283165aa0510faf0ddc9caa934a0fae.gif", // black dot paint
  "https://d2w9rnfcy7mm78.cloudfront.net/3655618/original_eb6404f0e455f5ffc239c9ffa8cad73c.gif", // caution
  "https://d2w9rnfcy7mm78.cloudfront.net/1102404/original_d614d05db1e8ed90bfd0aa87bfb6adbe.gif", // lava
  "https://d2w9rnfcy7mm78.cloudfront.net/2759492/original_1724532a4717ea109bd85050c1add7f1.gif", // jupiter
  "https://d2w9rnfcy7mm78.cloudfront.net/2964133/original_4068f0a2d8c5a2dd21c75d8803cb9d2f.gif", // stars
  "https://66.media.tumblr.com/9497754b3e2a224dc336cabd9551361d/tumblr_p8v5obO4rq1x8q01eo1_400.gif", // fish
  "https://66.media.tumblr.com/30518a0515a8b3ae8a903fd38bc6f241/tumblr_odsb8u3YzP1sqx3fro1_r1_500.gif", // waves
  "https://66.media.tumblr.com/3e6434c5a1aa5439d0217f2c50ca7c90/tumblr_nvq3iur0gN1qelyl4o1_500.gif", // skull
  "https://66.media.tumblr.com/tumblr_mby72pXhNO1rs8xuro1_500.gif", // universe
  "https://66.media.tumblr.com/f286f19e161df178d125b92cd11b9a4f/tumblr_pcykv4lfNK1txe8seo1_500.gif", // slices
  "https://66.media.tumblr.com/f63ac1f724be59d77c17655a33aff74b/tumblr_nwui7rT1sC1tuzo6xo1_250.gif", // devil card
  "https://66.media.tumblr.com/774dfec29aa6bf4ad996cad68e9c6753/tumblr_ohyflaE2PU1ql8t12o1_540.gif", // shot
  "https://66.media.tumblr.com/97b171948557fb7c665695bcc5cef698/tumblr_oc21wvJAY11rgmfmpo1_400.gif", // ninja lady
  "https://66.media.tumblr.com/e91e8e8831b0ea729ea500eb294bd939/tumblr_mhs9d4zjJG1rpntveo1_500.gif", // explosion
  "https://66.media.tumblr.com/tumblr_lqpgv2WCAg1qcpleso1_500.gif", // nun gun
  "https://66.media.tumblr.com/4f3cf5068ea955c98d09720003136f39/tumblr_nw19rryVGa1s01qkyo1_540.gif", // lab
  "https://66.media.tumblr.com/650027bcaa778d5be9f76de0da7644b7/tumblr_nn06dbNSxN1s4fz4bo1_500.gif", // screen
  "https://66.media.tumblr.com/f1198b677188f71add3c6e95bb93c84d/tumblr_pn54pjVYJ01uk1zgxo1_1280.gif", // face
  "https://66.media.tumblr.com/887ccb18a193ad935b8f628cbeac47ee/tumblr_n90ote71231tyty5no1_500.gif", // clouds
  "https://66.media.tumblr.com/a19ca79ae21111c7490ec8a7f55714d4/c0b81b5d3cf406c4-60/s1280x1920/9a7b02a857a1a781006ba4a1c79f2c35b1685055.gif", // screens
  "https://66.media.tumblr.com/122eaab7b97fde329efa990fb697fd0e/tumblr_n382xlAX1s1ql8t12o1_500.gif", // scaffolding
  "https://66.media.tumblr.com/9118af9be0e5f520c55431eeed2dbff6/tumblr_myc9peeqdg1qz6y8xo1_500.gif", // tunnel
  "https://66.media.tumblr.com/7e8e857fa2ba5f129d924a4e78bc201b/tumblr_ph6g2tF67t1w4t58uo1_540.gif", // swipe
  "https://66.media.tumblr.com/8cafe3b0540278df342f9bd0d0a5f937/tumblr_mfkx8mu8vN1rj4kh0o1_400.gif", // archillect
  "https://66.media.tumblr.com/3f447b0a86c5e640e31ceb227ea738a1/tumblr_mruxalKily1scirugo1_500.gif", // numbers
  "https://66.media.tumblr.com/4d8361afdcabfedd993e33bb41b20bd8/tumblr_moo982jBOh1qedb29o1_500.gif", // access denied
  "https://66.media.tumblr.com/b84da27522e264cf469090c8ecddff6a/tumblr_mlw2ek9Lzv1qiz3j8o1_500.gif", // stare
  "https://66.media.tumblr.com/9e550518fe91384b7a84208b3d055f30/tumblr_o05cjoDZbO1qgdxico1_540.gif", // focus
  "https://66.media.tumblr.com/7132d29cfabb8f7f64d4eefce1453140/tumblr_ocx69ulYdC1t1ye6to1_500.gif", // break
  "https://66.media.tumblr.com/07624e3dd65cb55bbb80f0bd0600816a/e10012c63d095331-c0/s500x750/4c0bd2ad7365466c64f3dedce0113f7ad81ef1ed.gif", // fighter
  "https://66.media.tumblr.com/0925e5c83427bbf68b609084a37709a3/tumblr_nzaiakuacj1ulzowxo1_540.gif", // walk
  "https://66.media.tumblr.com/af62c8cf6efa4a2d69f8af69387e0c70/tumblr_pghj2w92X71v05rsfo1_400.gif", // entry request
  "https://66.media.tumblr.com/d2e8e46114112ea33716a7b432cabc72/tumblr_o80ujmmOLv1tls8aro1_640.gif", // subway
  "https://66.media.tumblr.com/a3cffd84eff011e2eec2bfff85214343/tumblr_n0qp6tfn581r8xoupo1_400.gif", // TV
  "https://66.media.tumblr.com/be166d106845279f1eb30308ffa2a493/tumblr_ml82wnyddx1ql8t12o1_400.gif", // thom
  "https://66.media.tumblr.com/21e24d6e1dddaa4ccddfed56c019645a/tumblr_ncrr4yc8J91s5fa4co1_400.gif", // meter
  "https://66.media.tumblr.com/5c650ab801ef599ca0973ab8cb9582ff/tumblr_o17z12hEOG1tezjkso1_500.gif", // restricted
  "https://66.media.tumblr.com/tumblr_mcod7w1L701rhcqmwo1_500.gif", // skull
  "https://66.media.tumblr.com/3a96d586807c17891049ed8ae1f1fe1c/tumblr_oiws1nW6Ge1tls8aro1_540.gif", // glitch
  "https://66.media.tumblr.com/e44cab84af51fe8eb570ea6fa2b8a2a2/tumblr_mrfkmvbbcO1rafollo1_250.gif", // face
  "https://66.media.tumblr.com/41c9460667a15f032483a4585c75cef3/tumblr_pg0m5hpLGv1uy79i5o2_400.gif", // art
  "https://66.media.tumblr.com/a7fccd905fdd2bb8d4cdb74def784324/tumblr_paq7meg7631rlis9co1_1280.gif", // with courage
  "https://66.media.tumblr.com/61c92620a335a0b5b2702b6683528d58/tumblr_oypuesiMeK1wf5mhio1_640.gif", // the past
  "https://66.media.tumblr.com/e99689e56bef5258e42e7fb358e5bba4/tumblr_nvej4wupcr1rejsdfo2_400.gif", // smoking
  "https://66.media.tumblr.com/7967921f96289b286d51a8207424c463/tumblr_px2m13KT3X1ut1d6co2_540.gif", // anime
  "https://66.media.tumblr.com/4bd3800892d0673a76db4f08636e0ef4/tumblr_mzrsp3d8w21sqcuabo1_500.gif", // gun shot
  "https://66.media.tumblr.com/fac8bbdb895413acbd9df99520821bf5/tumblr_pfeywzUPGD1v05rsfo1_500.gif", // astronaut
  "https://66.media.tumblr.com/95c3c067fbf4737aa30c4fba16ee58f9/tumblr_pz12jqlYgx1w4t58uo3_540.gif", // terminator
  "https://66.media.tumblr.com/3db96e4216211ad646946d5cf34c2003/tumblr_oungcuJ9IW1tls8aro1_540.gif", // circuit
  "https://66.media.tumblr.com/eee41c9cf2ff31e02547b82ad3d0dedf/tumblr_pkm5cxxkAW1v6w3juo1_500.gif", // fight
  "https://d2w9rnfcy7mm78.cloudfront.net/5888943/original_63be6f9b7488d618100ce38205571cf0.gif?1578883544?bc=0", // micro
  "https://d2w9rnfcy7mm78.cloudfront.net/597667/original_eb2b8f593395e14dcd3948797ab630c7.gif?1461272688?bc=1", // cone
  "https://d2w9rnfcy7mm78.cloudfront.net/2967801/original_82f6b07713cf220ba70a5ad76265c089.gif?1541080443?bc=1", // future
  "https://d2w9rnfcy7mm78.cloudfront.net/2056218/original_44b333e7103f0452490da60015129230.gif?1523996036?bc=1", // question everything
  "https://d2w9rnfcy7mm78.cloudfront.net/2093079/original_fb96f6a846e5786794334617d92737d9.gif?1524669358?bc=1", // oil water?
  "https://d2w9rnfcy7mm78.cloudfront.net/1968830/original_31a167b8f26935bba12dbf2045ae9724.gif?1522351217?bc=1", // plus
  "https://d2w9rnfcy7mm78.cloudfront.net/671830/original_af4a1620cbdbc9d40faa477575fb3fd3.gif", // spinning dude
  "https://d2w9rnfcy7mm78.cloudfront.net/818083/original_15d2de677651294d5fc4bc2fa8e9b1e5.gif?1483146529?bc=1", // error
  "https://d2w9rnfcy7mm78.cloudfront.net/2322401/original_f96a5e90751a57264c0e3ecc37778a37.gif?1529256131?bc=1", // hands
  "https://d2w9rnfcy7mm78.cloudfront.net/309162/original_3b088500053908a1fc8a5debf1e46b7a.gif?1417167151?bc=1", // sonar
  "https://d2w9rnfcy7mm78.cloudfront.net/2579219/original_07f019619eb533cc376426bd1f134b0a.gif?1534805589?bc=1", // gradient
  "https://d2w9rnfcy7mm78.cloudfront.net/4016021/original_7cc18226de9a9b3bcea965fa2d1653fd.gif?1554438548?bc=1", // lines
  "https://d2w9rnfcy7mm78.cloudfront.net/6290515/original_d62482a6da1cb7d71bb1300c5280b7ac.gif?1582740236?bc=0", // question perception
  "https://d2w9rnfcy7mm78.cloudfront.net/6301001/original_c95d1007e7f7a5c72895652efb2ba64c.gif?1582815364?bc=0", // logo
  "https://d2w9rnfcy7mm78.cloudfront.net/6299495/original_76fa992ec667d7ca0aedcd969edd7dff.gif?1582807499?bc=0", // earth
  "https://d2w9rnfcy7mm78.cloudfront.net/655480/original_9713088f7c22baf89772a5c321d8ee5d.gif?1468340677?bc=1", // dancer
  "https://d2w9rnfcy7mm78.cloudfront.net/1658002/original_5be0feeb622c42cb67c79e51411dc572.gif?1517081781?bc=1", // movement
  "https://d2w9rnfcy7mm78.cloudfront.net/6299293/original_99a1734ea28dae453a8f88fb61c5adeb.gif?1582805986?bc=0", // bottle
  "https://d2w9rnfcy7mm78.cloudfront.net/4420715/original_d385712d6193ab73ec691e288ba06ebc.gif?1559874679?bc=1", // the way out is thru
  "https://d2w9rnfcy7mm78.cloudfront.net/1266416/original_96e7b43cb158943e5ab4b5c164cc70aa.gif?1505655646?bc=1", // move
  "https://d2w9rnfcy7mm78.cloudfront.net/780041/original_780223f86e8cf9dcf47062cc663b06d9.gif?1480322655?bc=1", // uncomfortable
  "https://d2w9rnfcy7mm78.cloudfront.net/1259416/original_5817ac3b8a810edf39db0b8478c84885.gif?1505328928?bc=1", // ballet
  "https://d2w9rnfcy7mm78.cloudfront.net/1097458/original_f2777be24ff83529c213ea4fd6e99e91.gif?1498551094?bc=1", // power
  "https://d2w9rnfcy7mm78.cloudfront.net/3512275/original_6850e849e85e3e42686419a191f95361.gif?1548686990?bc=1", // text
  "https://d2w9rnfcy7mm78.cloudfront.net/285611/original_be7217221976a023731841e225fb805d.gif?1412139371?bc=1", // forever
  "https://d2w9rnfcy7mm78.cloudfront.net/2777932/original_dc336fe7539cdcfe707d621cee85a4d5.gif?1538001431?bc=1", // bang
  "https://d2w9rnfcy7mm78.cloudfront.net/2949514/original_100743b28e00a69d35fd580dcf8c0452.gif?1540822326?bc=1", // color vis
  "https://d2w9rnfcy7mm78.cloudfront.net/2315462/original_9e2c18609e3a36cd5b614591abb94296?1529027208?bc=1", // color machine
  "https://d2w9rnfcy7mm78.cloudfront.net/3006985/original_0777c46cd3433e70efa2e96eb68e3bd4.gif?1541690503?bc=1", // face
  "https://d2w9rnfcy7mm78.cloudfront.net/2970349/original_7097ba615884f1719ff97191845a9064.gif?1541106422?bc=1", // color explosion
  "https://d2w9rnfcy7mm78.cloudfront.net/1671226/original_dba842735b7d17c431214243d1b56809.gif?1517305731?bc=1", // color gradient
  "https://d2w9rnfcy7mm78.cloudfront.net/3570567/original_6802ea0a34d47ef86ff4800b13e7b5f6.gif?1549392648?bc=1", // wave
  "https://d2w9rnfcy7mm78.cloudfront.net/1334622/original_e872dbe4fbc43bcdcc46b60810211640.gif?1507851924?bc=1", // rec
  "https://d2w9rnfcy7mm78.cloudfront.net/6299497/original_a175202f29f61bfacb26fdcead320042.gif?1582807519?bc=0", // drawing
  "https://66.media.tumblr.com/6bff9d433ce496ca90fa5cf6bcf81e08/tumblr_n43f7cKB5t1qlgsvpo1_500.gif", // eight
  "https://66.media.tumblr.com/990e1b2c96c29d3d1e1f0c57a1d2d848/tumblr_n52fspSglC1s9q7lmo1_500.gif", // sync
  "https://d2w9rnfcy7mm78.cloudfront.net/1553053/original_8d6b691deec770b0fe0613b8c7af097c?1514998577?bc=1", // face
  "https://d2w9rnfcy7mm78.cloudfront.net/2834932/original_5a5f77f0278f65c7c78c5ace42f5d023.gif?1538997385?bc=1", // red
  "https://d2w9rnfcy7mm78.cloudfront.net/1067441/original_184d5411fb0917aa0271ed65327d68f1.gif?1497123454?bc=1", // A
  "https://d2w9rnfcy7mm78.cloudfront.net/3923487/original_83d0f5abbb89b299916bc67a4f2e7eb5.gif?1553383547?bc=1", // black hell?
  "https://d2w9rnfcy7mm78.cloudfront.net/4166113/original_88c5172391b6a0c9c6d059eb22e8b871.gif?1556393343?bc=1", // monaco
  "https://d2w9rnfcy7mm78.cloudfront.net/2702443/original_f014e7b9d796b344f60021d921df4460.gif?1536885943?bc=1", // vis
  "https://d2w9rnfcy7mm78.cloudfront.net/1309138/original_65b29cb10e0a851c152f902e803252b6.gif?1507050928?bc=1", // explos
  "https://d2w9rnfcy7mm78.cloudfront.net/2867963/original_3f326eedc0b9e600186f7ad551edf4b8.gif?1539522916?bc=1", // glitch
  "https://d2w9rnfcy7mm78.cloudfront.net/4279939/original_5c80c6b27a0be9d7424d6e0b1d0906eb.gif?1557940593?bc=1", // movement
  "https://d2w9rnfcy7mm78.cloudfront.net/2867798/original_7b3119e3caa0ac5e3b213cc0535ba932.gif?1539520171?bc=1", // vril aquarius
  "https://d2w9rnfcy7mm78.cloudfront.net/2652670/original_a1a8a8d2170cb1316fde33ae753a6759.gif?1536121200?bc=1", // fish
  "https://d2w9rnfcy7mm78.cloudfront.net/2968933/original_fc2b6f82c85362436fe3e9cf07267094.gif?1541091215?bc=1", // seductive
  "https://d2w9rnfcy7mm78.cloudfront.net/888373/original_dac8a9038b93a2f516f4d5f40061eaec.gif?1487456366?bc=1", // color?
  "https://d2w9rnfcy7mm78.cloudfront.net/5742474/original_102a8a9d9229fc860b597fd64f76b773.gif?1576672809?bc=0", // glitch skel
  "https://d2w9rnfcy7mm78.cloudfront.net/5742472/original_4e33ba75da3b7ff5acb5e8056cf72fa9.gif?1576672733?bc=0", // hands
  "https://d2w9rnfcy7mm78.cloudfront.net/5742464/original_2c0d36343d60f2eba5dd7cf54d7824f4.gif?1576672667?bc=0", // alley
  "https://d2w9rnfcy7mm78.cloudfront.net/5742465/original_1760dabf60cc706bd1319dba4e6cdab8.gif?1576672671?bc=0", // alley
  "https://d2w9rnfcy7mm78.cloudfront.net/5742466/original_89c1de4a6aad975b4b965418f06353a3.gif?1576672683?bc=0", // circle
  "https://d2w9rnfcy7mm78.cloudfront.net/5742467/original_606dec4c4a58c1aaa8cddff3052613a9.gif?1576672691?bc=0", // dots
  "https://d2w9rnfcy7mm78.cloudfront.net/5742463/original_30fdb12f317105c42c58a90aef4799ce.gif?1576672665?bc=0", // screens
  "https://d2w9rnfcy7mm78.cloudfront.net/5742438/original_d1168f027883bd8cef7352aa45315949.gif?1576672239?bc=0", // circle
  "https://d2w9rnfcy7mm78.cloudfront.net/5742433/original_9e94117cd1855adc31066f84f55e83d0.gif?1576672147?bc=0", // space
  "https://d2w9rnfcy7mm78.cloudfront.net/5742427/original_753394db65f5457896312561a25bcbb3.gif?1576672032?bc=0", // it has no name
  "https://d2w9rnfcy7mm78.cloudfront.net/1907566/original_eb9117ef1db6fa1b12f8d9a01fe2e79d.gif?1521311569?bc=1", // mirrors
  "https://d2w9rnfcy7mm78.cloudfront.net/2594819/original_11ff0ffddeac2396ad8ce0cfac3464c9.gif?1535066960?bc=1", // ball
  "https://d2w9rnfcy7mm78.cloudfront.net/2834931/original_8233435df9a5ac60fd667b4d6614df14.gif?1538997384?bc=1", // dude
  "https://d2w9rnfcy7mm78.cloudfront.net/3423359/original_f3b6a2652f21c3ba4e98d948b3075e19.gif?1547659050?bc=1", // eyes
  "https://d2w9rnfcy7mm78.cloudfront.net/2559850/original_91631b4f9e20f67b925d486a63ee9c25.gif?1534356780?bc=1", // movement
  "https://d2w9rnfcy7mm78.cloudfront.net/2648433/original_7acf90bdf5b8aa15ef165dbf8d8058af.gif?1536071515?bc=1", // entrance
  "https://d2w9rnfcy7mm78.cloudfront.net/154049/original_512673f87792580b1c75e015dd70b16f.gif?1523399678?bc=1", // galaxy
  "https://d2w9rnfcy7mm78.cloudfront.net/1790876/original_e5da14f6227622a3a7a88ad7272dc84e.gif?1519161138?bc=1", // ?!
  "https://d2w9rnfcy7mm78.cloudfront.net/6485168/original_c158a60ec7da8a74fe6be13cc09701e1.gif?1584496414?bc=0", // graphix
  "https://d2w9rnfcy7mm78.cloudfront.net/4555423/original_d8c52447a6ff4f842251fe19e4958d00.gif?1562083423?bc=1", // there is no nature
  "https://d2w9rnfcy7mm78.cloudfront.net/740479/original_053a4724c1b3f42bb8ddb54adb4d59d8.gif?1476803040?bc=1", // grid
  "https://d2w9rnfcy7mm78.cloudfront.net/2684126/original_23002e713bdcfcbf84f818438cb826a6.gif?1536660992?bc=1", // movement
  "https://d2w9rnfcy7mm78.cloudfront.net/1327444/original_e74546740d933a6a3f20c84f86732531.gif?1507642563?bc=1", // centroid
  "https://d2w9rnfcy7mm78.cloudfront.net/2826210/original_458e37cde2dc0776eb7133c14db9f8ea.gif?1538788005?bc=1", // waves
  "https://d2w9rnfcy7mm78.cloudfront.net/1001854/original_c330a2cc5a80d26f6ec16d4708d4a2f6.gif?1493729265?bc=1", // beyond traffic
  "https://d2w9rnfcy7mm78.cloudfront.net/2037356/original_8206ec5bf65bb0411e26c54c7a56688b.gif?1523627017?bc=1", // draw
  "https://d2w9rnfcy7mm78.cloudfront.net/208852/original_8e78c76f7735fd322c7925d2bf267df7.gif?1393534938?bc=1", // color
  "https://d2w9rnfcy7mm78.cloudfront.net/1802131/original_0c0b44885d5f27ce53a6be2c89ced08f.gif?1519395814?bc=1", // illustration
  "https://d2w9rnfcy7mm78.cloudfront.net/1198284/original_0857cc3781167bcb4a455e26f90ffdb7.gif?1502862084?bc=1", // delete
  "https://d2w9rnfcy7mm78.cloudfront.net/2663587/original_a5fe29ab208534e13aa12334735e2b50.gif?1536266735?bc=1", // are you expanding
  "https://d2w9rnfcy7mm78.cloudfront.net/2097570/original_b652f1b2ee2c09e6a3ca8de172fcd5be.gif?1524755133?bc=1", // glitch
  "https://d2w9rnfcy7mm78.cloudfront.net/998091/original_9f50157d5eff4360fcfd32add45368d2.gif?1493411274?bc=1", // red glitch
  "https://d2w9rnfcy7mm78.cloudfront.net/908248/original_ff33b53a3dfd00819557de3cb8e502df.gif?1488489701?bc=1", // floppy
  "https://d2w9rnfcy7mm78.cloudfront.net/3761700/original_0259c76ded2608804bee84727dbd9b8d.gif?1551442770?bc=1", // grid
  "https://d2w9rnfcy7mm78.cloudfront.net/339718/original_45cc06734bb1d046111fd316ab436eaf.gif?1424083012?bc=1", // graphic
  "https://d2w9rnfcy7mm78.cloudfront.net/3816520/original_8a72eef2b9749a236a3870f18b5b7c5a.gif?1552005307?bc=1", // switch
  "https://d2w9rnfcy7mm78.cloudfront.net/3613764/original_a46624ab3e2f4937f89246f2fda918c5.gif?1549843596?bc=1", // loading
  "https://d2w9rnfcy7mm78.cloudfront.net/317495/original_cc8265ffd539ed2b3666b48095729887.gif?1418835514?bc=1", // color wave
  "https://d2w9rnfcy7mm78.cloudfront.net/3244050/original_f06faea915b4c370a735f494f695ad55.gif?1545400586?bc=1", // movement
  "https://d2w9rnfcy7mm78.cloudfront.net/3244049/original_6fbac0133e33fd23498ae6dbd7e58487.gif?1545400569?bc=1", // lights
  "https://d2w9rnfcy7mm78.cloudfront.net/3244046/original_f68096b0fc48d0dc4b22458b080fbd78.gif?1545400503?bc=1", // sq
  "https://d2w9rnfcy7mm78.cloudfront.net/2503742/original_7f8e4d565782d1e3e9dd5ebb1ac77d16.gif?1533144803?bc=1", // movement
  "https://d2w9rnfcy7mm78.cloudfront.net/2396441/original_c101693fdabddfeb28aaf04dafba511c.gif?1530903748?bc=1", // color
  "https://d2w9rnfcy7mm78.cloudfront.net/2815251/original_683bca230878f1a7df175496654333d8.gif?1538606265?bc=1", // color boil
  "https://d2w9rnfcy7mm78.cloudfront.net/2370391/original_f2828863a1f42f874a73833f722bfeda.gif?1530281235?bc=1", // lights
  "https://d2w9rnfcy7mm78.cloudfront.net/149863/original_a671b3ca4e738544ebca5f496011cfd2.gif?1379102353?bc=1", // earth
  "https://d2w9rnfcy7mm78.cloudfront.net/1691426/original_baaf3fc6a0cf20c16a663d8b2ad26546.gif?1517619769?bc=1", // eyes
  "https://d2w9rnfcy7mm78.cloudfront.net/828553/original_1217a1d088a9a7c25d5372112f2a1129.gif?1483991476?bc=1", // smiley
  "https://d2w9rnfcy7mm78.cloudfront.net/1313595/original_b7a013aa22f1d18236f886a8fe4cec61.gif?1507167867?bc=1", // infinity
  "https://d2w9rnfcy7mm78.cloudfront.net/190965/original_56490a71e8606742b29b995c68ff0537.gif?1390314313?bc=1", // strange
]

const house_images = [
  "https://d2w9rnfcy7mm78.cloudfront.net/2818228/original_788e1b4da4c327b0f6879f24cd503832.gif", // color
  "https://d2w9rnfcy7mm78.cloudfront.net/1891065/original_0f98fd93ad9cd9e0bb61e2fdd14c0591.gif", // color explosion
  "https://d2w9rnfcy7mm78.cloudfront.net/2109658/original_e24ec2b7498aa5d767a6dc55e1408fbc.gif", // touch me not
  "https://d2w9rnfcy7mm78.cloudfront.net/1802131/original_0c0b44885d5f27ce53a6be2c89ced08f.gif", // illustration
  "https://d2w9rnfcy7mm78.cloudfront.net/211208/original_3bc59f9e4b643d988f90093e6dab5512.gif", // color illustration
  "https://d2w9rnfcy7mm78.cloudfront.net/2305187/original_84dccc2ab0b98a371c3066840239a719.gif", // color collage
  "https://d2w9rnfcy7mm78.cloudfront.net/2258536/original_15b6737dba7c7f249fc006b53e114b95.gif", // clouds
  "https://d2w9rnfcy7mm78.cloudfront.net/3655609/original_a7bab9f2cc7f4b89d5c5ea1c71be0f24.gif", // helmet karate
  "https://d2w9rnfcy7mm78.cloudfront.net/1305198/original_c707e9e3cf895fae36e196b3a2f2af9b.gif", // wavy color
  "https://66.media.tumblr.com/04538110ef9ee1f668f690249d102eb9/tumblr_nyyarr6oq51uke22ao1_500.gif", // peacock
  "https://d2w9rnfcy7mm78.cloudfront.net/2141056/original_6a9c4bb43d835c8c54252c09be3f557b.gif", // color dots
  "https://d2w9rnfcy7mm78.cloudfront.net/1551958/original_9290dc9487c726c1d433f6cbc7316ba7.gif", // love & fear
  "https://d2w9rnfcy7mm78.cloudfront.net/741291/original_727943b2c3132eb51ff71e4f711c8922.gif", // faces
  "https://d2w9rnfcy7mm78.cloudfront.net/1104219/original_6a36fd8db97f6c80bbbabc916b47f69e.gif", // painting animation
  "https://d2w9rnfcy7mm78.cloudfront.net/2252039/original_d125eff113fe83a23c4049e0b91bb00a.gif", // water + ball
  "https://d2w9rnfcy7mm78.cloudfront.net/1758359/original_9754ceb73371725ad50dd783dc181930.gif", // unimpressed doggo
  "https://d2w9rnfcy7mm78.cloudfront.net/716386/original_f7f1c70bd4209f83f531f8a3afb98dcf.gif", // dude in room
  "https://d2w9rnfcy7mm78.cloudfront.net/1269681/original_c7b6f0ec9edc709dec81b36f8e3ae786.gif", // on the edge
  "https://d2w9rnfcy7mm78.cloudfront.net/741268/original_615162b6bbf564ceeafcd46bbeda5cca.gif", // world illustrated
  "https://d2w9rnfcy7mm78.cloudfront.net/415465/original_81f80bb8b33fee2f15d9c589230e5466.gif", // slow mo balloon
  "https://d2w9rnfcy7mm78.cloudfront.net/1907334/original_5f7d1c1ae1155a9274d3731ea29cc61c.gif", // tornado
  "https://d2w9rnfcy7mm78.cloudfront.net/1910182/original_0f2c9150d941c630aeaa058d10eb9aae.gif", // ice creams
  "https://d2w9rnfcy7mm78.cloudfront.net/1907320/original_93fbe9a6c6d0faa768a88cc608314517.gif", // bike fall
  "https://d2w9rnfcy7mm78.cloudfront.net/1917615/original_afe4948a187bce530d4dc49ef2ec4758.gif", // city
  "https://d2w9rnfcy7mm78.cloudfront.net/1953329/original_4c7bd755539d878f2be9fb0b8b129464.gif", // LA
  "https://d2w9rnfcy7mm78.cloudfront.net/1931669/original_cc6130abe25c302026d24f44daaa754d.gif", // political party
  "https://d2w9rnfcy7mm78.cloudfront.net/1809334/original_92e0051406caf05c486e21b78653f05a.gif", // basketball
  "https://d2w9rnfcy7mm78.cloudfront.net/2141332/original_b172aa41b9d88059009f8bc01babd495.gif", // zuck
  "https://d2w9rnfcy7mm78.cloudfront.net/2067994/original_651c88a32556ca031e1995262096f60a.gif", // daft punk
  "https://d2w9rnfcy7mm78.cloudfront.net/2155911/original_bbc11933fda0a70c06456f98a1a41d20.gif", // india
  "https://d2w9rnfcy7mm78.cloudfront.net/1639434/original_e9de55837ff55d9a54c55e92cc51fd43.gif", // clay cook
  "https://d2w9rnfcy7mm78.cloudfront.net/1764557/original_2f308bd485b7141b0cd97cff61c8e653.gif", // glitter
  "https://d2w9rnfcy7mm78.cloudfront.net/1471864/original_9c4fa04225aec1f3159d5f476d536218.gif", // illustrated hand
  "https://d2w9rnfcy7mm78.cloudfront.net/671830/original_af4a1620cbdbc9d40faa477575fb3fd3.gif", // spinning dude
  "https://d2w9rnfcy7mm78.cloudfront.net/3670115/original_62c37f15773fbf8f9113910ad2bb33e6.gif", // not the father
  "https://d2w9rnfcy7mm78.cloudfront.net/3220668/original_d9f32d1468f7db0c10581dc09d745efc.gif", // doggo back
  "https://d2w9rnfcy7mm78.cloudfront.net/110653/original_f3793e74b49815a6445aa7998d22197c.gif", // squirtles
]

const imageHead = document.getElementById("full-background");

let i = 0;

setInterval(function() {
  var img = techno_images[Math.floor(Math.random() * techno_images.length)];
  imageHead.style.backgroundImage = "url(" + img + ")";
}, 3000);
