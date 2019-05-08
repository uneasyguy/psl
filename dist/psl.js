(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.psl = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports=["ac","com.ac","edu.ac","gov.ac","net.ac","mil.ac","org.ac","ad","nom.ad","ae","co.ae","net.ae","org.ae","sch.ae","ac.ae","gov.ae","mil.ae","aero","accident-investigation.aero","accident-prevention.aero","aerobatic.aero","aeroclub.aero","aerodrome.aero","agents.aero","aircraft.aero","airline.aero","airport.aero","air-surveillance.aero","airtraffic.aero","air-traffic-control.aero","ambulance.aero","amusement.aero","association.aero","author.aero","ballooning.aero","broker.aero","caa.aero","cargo.aero","catering.aero","certification.aero","championship.aero","charter.aero","civilaviation.aero","club.aero","conference.aero","consultant.aero","consulting.aero","control.aero","council.aero","crew.aero","design.aero","dgca.aero","educator.aero","emergency.aero","engine.aero","engineer.aero","entertainment.aero","equipment.aero","exchange.aero","express.aero","federation.aero","flight.aero","freight.aero","fuel.aero","gliding.aero","government.aero","groundhandling.aero","group.aero","hanggliding.aero","homebuilt.aero","insurance.aero","journal.aero","journalist.aero","leasing.aero","logistics.aero","magazine.aero","maintenance.aero","media.aero","microlight.aero","modelling.aero","navigation.aero","parachuting.aero","paragliding.aero","passenger-association.aero","pilot.aero","press.aero","production.aero","recreation.aero","repbody.aero","res.aero","research.aero","rotorcraft.aero","safety.aero","scientist.aero","services.aero","show.aero","skydiving.aero","software.aero","student.aero","trader.aero","trading.aero","trainer.aero","union.aero","workinggroup.aero","works.aero","af","gov.af","com.af","org.af","net.af","edu.af","ag","com.ag","org.ag","net.ag","co.ag","nom.ag","ai","off.ai","com.ai","net.ai","org.ai","al","com.al","edu.al","gov.al","mil.al","net.al","org.al","am","ao","ed.ao","gv.ao","og.ao","co.ao","pb.ao","it.ao","aq","ar","com.ar","edu.ar","gob.ar","gov.ar","int.ar","mil.ar","musica.ar","net.ar","org.ar","tur.ar","arpa","e164.arpa","in-addr.arpa","ip6.arpa","iris.arpa","uri.arpa","urn.arpa","as","gov.as","asia","at","ac.at","co.at","gv.at","or.at","au","com.au","net.au","org.au","edu.au","gov.au","asn.au","id.au","info.au","conf.au","oz.au","act.au","nsw.au","nt.au","qld.au","sa.au","tas.au","vic.au","wa.au","act.edu.au","nsw.edu.au","nt.edu.au","qld.edu.au","sa.edu.au","tas.edu.au","vic.edu.au","wa.edu.au","qld.gov.au","sa.gov.au","tas.gov.au","vic.gov.au","wa.gov.au","aw","com.aw","ax","az","com.az","net.az","int.az","gov.az","org.az","edu.az","info.az","pp.az","mil.az","name.az","pro.az","biz.az","ba","com.ba","edu.ba","gov.ba","mil.ba","net.ba","org.ba","bb","biz.bb","co.bb","com.bb","edu.bb","gov.bb","info.bb","net.bb","org.bb","store.bb","tv.bb","*.bd","be","ac.be","bf","gov.bf","bg","a.bg","b.bg","c.bg","d.bg","e.bg","f.bg","g.bg","h.bg","i.bg","j.bg","k.bg","l.bg","m.bg","n.bg","o.bg","p.bg","q.bg","r.bg","s.bg","t.bg","u.bg","v.bg","w.bg","x.bg","y.bg","z.bg","0.bg","1.bg","2.bg","3.bg","4.bg","5.bg","6.bg","7.bg","8.bg","9.bg","bh","com.bh","edu.bh","net.bh","org.bh","gov.bh","bi","co.bi","com.bi","edu.bi","or.bi","org.bi","biz","bj","asso.bj","barreau.bj","gouv.bj","bm","com.bm","edu.bm","gov.bm","net.bm","org.bm","bn","com.bn","edu.bn","gov.bn","net.bn","org.bn","bo","com.bo","edu.bo","gob.bo","int.bo","org.bo","net.bo","mil.bo","tv.bo","web.bo","academia.bo","agro.bo","arte.bo","blog.bo","bolivia.bo","ciencia.bo","cooperativa.bo","democracia.bo","deporte.bo","ecologia.bo","economia.bo","empresa.bo","indigena.bo","industria.bo","info.bo","medicina.bo","movimiento.bo","musica.bo","natural.bo","nombre.bo","noticias.bo","patria.bo","politica.bo","profesional.bo","plurinacional.bo","pueblo.bo","revista.bo","salud.bo","tecnologia.bo","tksat.bo","transporte.bo","wiki.bo","br","9guacu.br","abc.br","adm.br","adv.br","agr.br","aju.br","am.br","anani.br","aparecida.br","arq.br","art.br","ato.br","b.br","barueri.br","belem.br","bhz.br","bio.br","blog.br","bmd.br","boavista.br","bsb.br","campinagrande.br","campinas.br","caxias.br","cim.br","cng.br","cnt.br","com.br","contagem.br","coop.br","cri.br","cuiaba.br","curitiba.br","def.br","ecn.br","eco.br","edu.br","emp.br","eng.br","esp.br","etc.br","eti.br","far.br","feira.br","flog.br","floripa.br","fm.br","fnd.br","fortal.br","fot.br","foz.br","fst.br","g12.br","ggf.br","goiania.br","gov.br","ac.gov.br","al.gov.br","am.gov.br","ap.gov.br","ba.gov.br","ce.gov.br","df.gov.br","es.gov.br","go.gov.br","ma.gov.br","mg.gov.br","ms.gov.br","mt.gov.br","pa.gov.br","pb.gov.br","pe.gov.br","pi.gov.br","pr.gov.br","rj.gov.br","rn.gov.br","ro.gov.br","rr.gov.br","rs.gov.br","sc.gov.br","se.gov.br","sp.gov.br","to.gov.br","gru.br","imb.br","ind.br","inf.br","jab.br","jampa.br","jdf.br","joinville.br","jor.br","jus.br","leg.br","lel.br","londrina.br","macapa.br","maceio.br","manaus.br","maringa.br","mat.br","med.br","mil.br","morena.br","mp.br","mus.br","natal.br","net.br","niteroi.br","*.nom.br","not.br","ntr.br","odo.br","ong.br","org.br","osasco.br","palmas.br","poa.br","ppg.br","pro.br","psc.br","psi.br","pvh.br","qsl.br","radio.br","rec.br","recife.br","ribeirao.br","rio.br","riobranco.br","riopreto.br","salvador.br","sampa.br","santamaria.br","santoandre.br","saobernardo.br","saogonca.br","sjc.br","slg.br","slz.br","sorocaba.br","srv.br","taxi.br","teo.br","the.br","tmp.br","trd.br","tur.br","tv.br","udi.br","vet.br","vix.br","vlog.br","wiki.br","zlg.br","bs","com.bs","net.bs","org.bs","edu.bs","gov.bs","bt","com.bt","edu.bt","gov.bt","net.bt","org.bt","bv","bw","co.bw","org.bw","by","gov.by","mil.by","com.by","of.by","bz","com.bz","net.bz","org.bz","edu.bz","gov.bz","ca","ab.ca","bc.ca","mb.ca","nb.ca","nf.ca","nl.ca","ns.ca","nt.ca","nu.ca","on.ca","pe.ca","qc.ca","sk.ca","yk.ca","gc.ca","cat","cc","cd","gov.cd","cf","cg","ch","ci","org.ci","or.ci","com.ci","co.ci","edu.ci","ed.ci","ac.ci","net.ci","go.ci","asso.ci","aéroport.ci","int.ci","presse.ci","md.ci","gouv.ci","*.ck","!ww"*.nagoya.jp","*.sapporo.jp","*.sendai.jp","*.yokohama.jp","!city.kawasaki.jp","!city.kitakyushu.jp","!city.kobe.jp","!city.nagoya.jp","!city.sapporo.jp","!city.sendai.jp","!city.yokohama.jp","aisai.aichi.jp","ama.aichi.jp","anjo.aichi.jp","asuke.aichi.jp","chiryu.aichi.jp","chita.aichi.jp","fuso.aichi.jp","gamagori.aichi.jp","handa.aichi.jp","hazu.aichi.jp","hekinan.aichi.jp","higashiura.aichi.jp","ichinomiya.aichi.jp","inazawa.aichi.jp","inuyama.aichi.jp","isshiki.aichi.jp","iwakura.aichi.jp","kanie.aichi.jp","kariya.aichi.jp","kasugai.aichi.jp","kira.aichi.jp","kiyosu.aichi.jp","komaki.aichi.jp","konan.aichi.jp","kota.aichi.jp","mihama.aichi.jp","miyoshi.aichi.jp","nishio.aichi.jp","nisshin.aichi.jp","obu.aichi.jp","oguchi.aichi.jp","oharu.aichi.jp","okazaki.aichi.jp","owariasahi.aichi.jp","seto.aichi.jp","shikatsu.aichi.jp","shinshiro.aichi.jp","shitara.aichi.jp","tahara.aichi.jp","takahama.aichi.jp","tobishima.aichi.jp","toei.aichi.jp","togo.aichi.jp","tokai.aichi.jp","tokoname.aichi.jp","toyoake.aichi.jp","toyohashi.aichi.jp","toyokawa.aichi.jp","toyone.aichi.jp","toyota.aichi.jp","tsushima.aichi.jp","yatomi.aichi.jp","akita.akita.jp","daisen.akita.jp","fujisato.akita.jp","gojome.akita.jp","hachirogata.akita.jp","happou.akita.jp","higashinaruse.akita.jp","honjo.akita.jp","honjyo.akita.jp","ikawa.akita.jp","kamikoani.akita.jp","kamioka.akita.jp","katagami.akita.jp","kazuno.akita.jp","kitaakita.akita.jp","kosaka.akita.jp","kyowa.akita.jp","misato.akita.jp","mitane.akita.jp","moriyoshi.akita.jp","nikaho.akita.jp","noshiro.akita.jp","odate.akita.jp","oga.akita.jp","ogata.akita.jp","semboku.akita.jp","yokote.akita.jp","yurihonjo.akita.jp","aomori.aomori.jp","gonohe.aomori.jp","hachinohe.aomori.jp","hashikami.aomori.jp","hiranai.aomori.jp","hirosaki.aomori.jp","itayanagi.aomori.jp","kuroishi.aomori.jp","misawa.aomori.jp","mutsu.aomori.jp","nakadomari.aomori.jp","noheji.aomori.jp","oirase.aomori.jp","owani.aomori.jp","rokunohe.aomori.jp","sannohe.aomori.jp","shichinohe.aomori.jp","shingo.aomori.jp","takko.aomori.jp","towada.aomori.jp","tsugaru.aomori.jp","tsuruta.aomori.jp","abiko.chiba.jp","asahi.chiba.jp","chonan.chiba.jp","chosei.chiba.jp","choshi.chiba.jp","chuo.chiba.jp","funabashi.chiba.jp","futtsu.chiba.jp","hanamigawa.chiba.jp","ichihara.chiba.jp","ichikawa.chiba.jp","ichinomiya.chiba.jp","inzai.chiba.jp","isumi.chiba.jp","kamagaya.chiba.jp","kamogawa.chiba.jp","kashiwa.chiba.jp","katori.chiba.jp","katsuura.chiba.jp","kimitsu.chiba.jp","kisarazu.chiba.jp","kozaki.chiba.jp","kujukuri.chiba.jp","kyonan.chiba.jp","matsudo.chiba.jp","midori.chiba.jp","mihama.chiba.jp","minamiboso.chiba.jp","mobara.chiba.jp","mutsuzawa.chiba.jp","nagara.chiba.jp","nagareyama.chiba.jp","narashino.chiba.jp","narita.chiba.jp","noda.chiba.jp","oamishirasato.chiba.jp","omigawa.chiba.jp","onjuku.chiba.jp","otaki.chiba.jp","sakae.chiba.jp","sakura.chiba.jp","shimofusa.chiba.jp","shirako.chiba.jp","shiroi.chiba.jp","shisui.chiba.jp","sodegaura.chiba.jp","sosa.chiba.jp","tako.chiba.jp","tateyama.chiba.jp","togane.chiba.jp","tohnosho.chiba.jp","tomisato.chiba.jp","urayasu.chiba.jp","yachimata.chiba.jp","yachiyo.chiba.jp","yokaichiba.chiba.jp","yokoshibahikari.chiba.jp","yotsukaido.chiba.jp","ainan.ehime.jp","honai.ehime.jp","ikata.ehime.jp","imabari.ehime.jp","iyo.ehime.jp","kamijima.ehime.jp","kihoku.ehime.jp","kumakogen.ehime.jp","masaki.ehime.jp","matsuno.ehime.jp","matsuyama.ehime.jp","namikata.ehime.jp","niihama.ehime.jp","ozu.ehime.jp","saijo.ehime.jp","seiyo.ehime.jp","shikokuchuo.ehime.jp","tobe.ehime.jp","toon.ehime.jp","uchiko.ehime.jp","uwajima.ehime.jp","yawatahama.ehime.jp","echizen.fukui.jp","eiheiji.fukui.jp","fukui.fukui.jp","ikeda.fukui.jp","katsuyama.fukui.jp","mihama.fukui.jp","minamiechizen.fukui.jp","obama.fukui.jp","ohi.fukui.jp","ono.fukui.jp","sabae.fukui.jp","sakai.fukui.jp","takahama.fukui.jp","tsuruga.fukui.jp","wakasa.fukui.jp","ashiya.fukuoka.jp","buzen.fukuoka.jp","chikugo.fukuoka.jp","chikuho.fukuoka.jp","chikujo.fukuoka.jp","chikushino.fukuoka.jp","chikuzen.fukuoka.jp","chuo.fukuoka.jp","dazaifu.fukuoka.jp","fukuchi.fukuoka.jp","hakata.fukuoka.jp","higashi.fukuoka.jp","hirokawa.fukuoka.jp","hisayama.fukuoka.jp","iizuka.fukuoka.jp","inatsuki.fukuoka.jp","kaho.fukuoka.jp","kasuga.fukuoka.jp","kasuya.fukuoka.jp","kawara.fukuoka.jp","keisen.fukuoka.jp","koga.fukuoka.jp","kurate.fukuoka.jp","kurogi.fukuoka.jp","kurume.fukuoka.jp","minami.fukuoka.jp","miyako.fukuoka.jp","miyama.fukuoka.jp","miyawaka.fukuoka.jp","mizumaki.fukuoka.jp","munakata.fukuoka.jp","nakagawa.fukuoka.jp","nakama.fukuoka.jp","nishi.fukuoka.jp","nogata.fukuoka.jp","ogori.fukuoka.jp","okagaki.fukuoka.jp","okawa.fukuoka.jp","oki.fukuoka.jp","omuta.fukuoka.jp","onga.fukuoka.jp","onojo.fukuoka.jp","oto.fukuoka.jp","saigawa.fukuoka.jp","sasaguri.fukuoka.jp","shingu.fukuoka.jp","shinyoshitomi.fukuoka.jp","shonai.fukuoka.jp","soeda.fukuoka.jp","sue.fukuoka.jp","tachiarai.fukuoka.jp","tagawa.fukuoka.jp","takata.fukuoka.jp","toho.fukuoka.jp","toyotsu.fukuoka.jp","tsuiki.fukuoka.jp","ukiha.fukuoka.jp","umi.fukuoka.jp","usui.fukuoka.jp","yamada.fukuoka.jp","yame.fukuoka.jp","yanagawa.fukuoka.jp","yukuhashi.fukuoka.jp","aizubange.fukushima.jp","aizumisato.fukushima.jp","aizuwakamatsu.fukushima.jp","asakawa.fukushima.jp","bandai.fukushima.jp","date.fukushima.jp","fukushima.fukushima.jp","furudono.fukushima.jp","futaba.fukushima.jp","hanawa.fukushima.jp","higashi.fukushima.jp","hirata.fukushima.jp","hirono.fukushima.jp","iitate.fukushima.jp","inawashiro.fukushima.jp","ishikawa.fukushima.jp","iwaki.fukushima.jp","izumizaki.fukushima.jp","kagamiishi.fukushima.jp","kaneyama.fukushima.jp","kawamata.fukushima.jp","kitakata.fukushima.jp","kitashiobara.fukushima.jp","koori.fukushima.jp","koriyama.fukushima.jp","kunimi.fukushima.jp","miharu.fukushima.jp","mishima.fukushima.jp","namie.fukushima.jp","nango.fukushima.jp","nishiaizu.fukushima.jp","nishigo.fukushima.jp","okuma.fukushima.jp","omotego.fukushima.jp","ono.fukushima.jp","otama.fukushima.jp","samegawa.fukushima.jp","shimogo.fukushima.jp","shirakawa.fukushima.jp","showa.fukushima.jp","soma.fukushima.jp","sukagawa.fukushima.jp","taishin.fukushima.jp","tamakawa.fukushima.jp","tanagura.fukushima.jp","tenei.fukushima.jp","yabuki.fukushima.jp","yamato.fukushima.jp","yamatsuri.fukushima.jp","yanaizu.fukushima.jp","yugawa.fukushima.jp","anpachi.gifu.jp","ena.gifu.jp","gifu.gifu.jp","ginan.gifu.jp","godo.gifu.jp","gujo.gifu.jp","hashima.gifu.jp","hichiso.gifu.jp","hida.gifu.jp","higashishirakawa.gifu.jp","ibigawa.gifu.jp","ikeda.gifu.jp","kakamigahara.gifu.jp","kani.gifu.jp","kasahara.gifu.jp","kasamatsu.gifu.jp","kawaue.gifu.jp","kitagata.gifu.jp","mino.gifu.jp","minokamo.gifu.jp","mitake.gifu.jp","mizunami.gifu.jp","motosu.gifu.jp","nakatsugawa.gifu.jp","ogaki.gifu.jp","sakahogi.gifu.jp","seki.gifu.jp","sekigahara.gifu.jp","shirakawa.gifu.jp","tajimi.gifu.jp","takayama.gifu.jp","tarui.gifu.jp","toki.gifu.jp","tomika.gifu.jp","wanouchi.gifu.jp","yamagata.gifu.jp","yaotsu.gifu.jp","yoro.gifu.jp","annaka.gunma.jp","chiyoda.gunma.jp","fujioka.gunma.jp","higashiagatsuma.gunma.jp","isesaki.gunma.jp","itakura.gunma.jp","kanna.gunma.jp","kanra.gunma.jp","katashina.gunma.jp","kawaba.gunma.jp","kiryu.gunma.jp","kusatsu.gunma.jp","maebashi.gunma.jp","meiwa.gunma.jp","midori.gunma.jp","minakami.gunma.jp","naganohara.gunma.jp","nakanojo.gunma.jp","nanmoku.gunma.jp","numata.gunma.jp","oizumi.gunma.jp","ora.gunma.jp","ota.gunma.jp","shibukawa.gunma.jp","shimonita.gunma.jp","shinto.gunma.jp","showa.gunma.jp","takasaki.gunma.jp","takayama.gunma.jp","tamamura.gunma.jp","tatebayashi.gunma.jp","tomioka.gunma.jp","tsukiyono.gunma.jp","tsumagoi.gunma.jp","ueno.gunma.jp","yoshioka.gunma.jp","asaminami.hiroshima.jp","daiwa.hiroshima.jp","etajima.hiroshima.jp","fuchu.hiroshima.jp","fukuyama.hiroshima.jp","hatsukaichi.hiroshima.jp","higashihiroshima.hiroshima.jp","hongo.hiroshima.jp","jinsekikogen.hiroshima.jp","kaita.hiroshima.jp","kui.hiroshima.jp","kumano.hiroshima.jp","kure.hiroshima.jp","mihara.hiroshima.jp","miyoshi.hiroshima.jp","naka.hiroshima.jp","onomichi.hiroshima.jp","osakikamijima.hiroshima.jp","otake.hiroshima.jp","saka.hiroshima.jp","sera.hiroshima.jp","seranishi.hiroshima.jp","shinichi.hiroshima.jp","shobara.hiroshima.jp","takehara.hiroshima.jp","abashiri.hokkaido.jp","abira.hokkaido.jp","aibetsu.hokkaido.jp","akabira.hokkaido.jp","akkeshi.hokkaido.jp","asahikawa.hokkaido.jp","ashibetsu.hokkaido.jp","ashoro.hokkaido.jp","assabu.hokkaido.jp","atsuma.hokkaido.jp","bibai.hokkaido.jp","biei.hokkaido.jp","bifuka.hokkaido.jp","bihoro.hokkaido.jp","biratori.hokkaido.jp","chippubetsu.hokkaido.jp","chitose.hokkaido.jp","date.hokkaido.jp","ebetsu.hokkaido.jp","embetsu.hokkaido.jp","eniwa.hokkaido.jp","erimo.hokkaido.jp","esan.hokkaido.jp","esashi.hokkaido.jp","fukagawa.hokkaido.jp","fukushima.hokkaido.jp","furano.hokkaido.jp","furubira.hokkaido.jp","haboro.hokkaido.jp","hakodate.hokkaido.jp","hamatonbetsu.hokkaido.jp","hidaka.hokkaido.jp","higashikagura.hokkaido.jp","higashikawa.hokkaido.jp","hiroo.hokkaido.jp","hokuryu.hokkaido.jp","hokuto.hokkaido.jp","honbetsu.hokkaido.jp","horokanai.hokkaido.jp","horonobe.hokkaido.jp","ikeda.hokkaido.jp","imakane.hokkaido.jp","ishikari.hokkaido.jp","iwamizawa.hokkaido.jp","iwanai.hokkaido.jp","kamifurano.hokkaido.jp","kamikawa.hokkaido.jp","kamishihoro.hokkaido.jp","kamisunagawa.hokkaido.jp","kamoenai.hokkaido.jp","kayabe.hokkaido.jp","kembuchi.hokkaido.jp","kikonai.hokkaido.jp","kimobetsu.hokkaido.jp","kitahiroshima.hokkaido.jp","kitami.hokkaido.jp","kiyosato.hokkaido.jp","koshimizu.hokkaido.jp","kunneppu.hokkaido.jp","kuriyama.hokkaido.jp","kuromatsunai.hokkaido.jp","kushiro.hokkaido.jp","kutchan.hokkaido.jp","kyowa.hokkaido.jp","mashike.hokkaido.jp","matsumae.hokkaido.jp","mikasa.hokkaido.jp","minamifurano.hokkaido.jp","mombetsu.hokkaido.jp","moseushi.hokkaido.jp","mukawa.hokkaido.jp","muroran.hokkaido.jp","naie.hokkaido.jp","nakagawa.hokkaido.jp","nakasatsunai.hokkaido.jp","nakatombetsu.hokkaido.jp","nanae.hokkaido.jp","nanporo.hokkaido.jp","nayoro.hokkaido.jp","nemuro.hokkaido.jp","niikappu.hokkaido.jp","niki.hokkaido.jp","nishiokoppe.hokkaido.jp","noboribetsu.hokkaido.jp","numata.hokkaido.jp","obihiro.hokkaido.jp","obira.hokkaido.jp","oketo.hokkaido.jp","okoppe.hokkaido.jp","otaru.hokkaido.jp","otobe.hokkaido.jp","otofuke.hokkaido.jp","otoineppu.hokkaido.jp","oumu.hokkaido.jp","ozora.hokkaido.jp","pippu.hokkaido.jp","rankoshi.hokkaido.jp","rebun.hokkaido.jp","rikubetsu.hokkaido.jp","rishiri.hokkaido.jp","rishirifuji.hokkaido.jp","saroma.hokkaido.jp","sarufutsu.hokkaido.jp","shakotan.hokkaido.jp","shari.hokkaido.jp","shibecha.hokkaido.jp","shibetsu.hokkaido.jp","shikabe.hokkaido.jp","shikaoi.hokkaido.jp","shimamaki.hokkaido.jp","shimizu.hokkaido.jp","shimokawa.hokkaido.jp","shinshinotsu.hokkaido.jp","shintoku.hokkaido.jp","shiranuka.hokkaido.jp","shiraoi.hokkaido.jp","shiriuchi.hokkaido.jp","sobetsu.hokkaido.jp","sunagawa.hokkaido.jp","taiki.hokkaido.jp","takasu.hokkaido.jp","takikawa.hokkaido.jp","takinoue.hokkaido.jp","teshikaga.hokkaido.jp","tobetsu.hokkaido.jp","tohma.hokkaido.jp","tomakomai.hokkaido.jp","tomari.hokkaido.jp","toya.hokkaido.jp","toyako.hokkaido.jp","toyotomi.hokkaido.jp","toyoura.hokkaido.jp","tsubetsu.hokkaido.jp","tsukigata.hokkaido.jp","urakawa.hokkaido.jp","urausu.hokkaido.jp","uryu.hokkaido.jp","utashinai.hokkaido.jp","wakkanai.hokkaido.jp","wassamu.hokkaido.jp","yakumo.hokkaido.jp","yoichi.hokkaido.jp","aioi.hyogo.jp","akashi.hyogo.jp","ako.hyogo.jp","amagasaki.hyogo.jp","aogaki.hyogo.jp","asago.hyogo.jp","ashiya.hyogo.jp","awaji.hyogo.jp","fukusaki.hyogo.jp","goshiki.hyogo.jp","harima.hyogo.jp","himeji.hyogo.jp","ichikawa.hyogo.jp","inagawa.hyogo.jp","itami.hyogo.jp","kakogawa.hyogo.jp","kamigori.hyogo.jp","kamikawa.hyogo.jp","kasai.hyogo.jp","kasuga.hyogo.jp","kawanishi.hyogo.jp","miki.hyogo.jp","minamiawaji.hyogo.jp","nishinomiya.hyogo.jp","nishiwaki.hyogo.jp","ono.hyogo.jp","sanda.hyogo.jp","sannan.hyogo.jp","sasayama.hyogo.jp","sayo.hyogo.jp","shingu.hyogo.jp","shinonsen.hyogo.jp","shiso.hyogo.jp","sumoto.hyogo.jp","taishi.hyogo.jp","taka.hyogo.jp","takarazuka.hyogo.jp","takasago.hyogo.jp","takino.hyogo.jp","tamba.hyogo.jp","tatsuno.hyogo.jp","toyooka.hyogo.jp","yabu.hyogo.jp","yashiro.hyogo.jp","yoka.hyogo.jp","yokawa.hyogo.jp","ami.ibaraki.jp","asahi.ibaraki.jp","bando.ibaraki.jp","chikusei.ibaraki.jp","daigo.ibaraki.jp","fujishiro.ibaraki.jp","hitachi.ibaraki.jp","hitachinaka.ibaraki.jp","hitachiomiya.ibaraki.jp","hitachiota.ibaraki.jp","ibaraki.ibaraki.jp","ina.ibaraki.jp","inashiki.ibaraki.jp","itako.ibaraki.jp","iwama.ibaraki.jp","joso.ibaraki.jp","kamisu.ibaraki.jp","kasama.ibaraki.jp","kashima.ibaraki.jp","kasumigaura.ibaraki.jp","koga.ibaraki.jp","miho.ibaraki.jp","mito.ibaraki.jp","moriya.ibaraki.jp","naka.ibaraki.jp","namegata.ibaraki.jp","oarai.ibaraki.jp","ogawa.ibaraki.jp","omitama.ibaraki.jp","ryugasaki.ibaraki.jp","sakai.ibaraki.jp","sakuragawa.ibaraki.jp","shimodate.ibaraki.jp","shimotsuma.ibaraki.jp","shirosato.ibaraki.jp","sowa.ibaraki.jp","suifu.ibaraki.jp","takahagi.ibaraki.jp","tamatsukuri.ibaraki.jp","tokai.ibaraki.jp","tomobe.ibaraki.jp","tone.ibaraki.jp","toride.ibaraki.jp","tsuchiura.ibaraki.jp","tsukuba.ibaraki.jp","uchihara.ibaraki.jp","ushiku.ibaraki.jp","yachiyo.ibaraki.jp","yamagata.ibaraki.jp","yawara.ibaraki.jp","yuki.ibaraki.jp","anamizu.ishikawa.jp","hakui.ishikawa.jp","hakusan.ishikawa.jp","kaga.ishikawa.jp","kahoku.ishikawa.jp","kanazawa.ishikawa.jp","kawakita.ishikawa.jp","komatsu.ishikawa.jp","nakanoto.ishikawa.jp","nanao.ishikawa.jp","nomi.ishikawa.jp","nonoichi.ishikawa.jp","noto.ishikawa.jp","shika.ishikawa.jp","suzu.ishikawa.jp","tsubata.ishikawa.jp","tsurugi.ishikawa.jp","uchinada.ishikawa.jp","wajima.ishikawa.jp","fudai.iwate.jp","fujisawa.iwate.jp","hanamaki.iwate.jp","hiraizumi.iwate.jp","hirono.iwate.jp","ichinohe.iwate.jp","ichinoseki.iwate.jp","iwaizumi.iwate.jp","iwate.iwate.jp","joboji.iwate.jp","kamaishi.iwate.jp","kanegasaki.iwate.jp","karumai.iwate.jp","kawai.iwate.jp","kitakami.iwate.jp","kuji.iwate.jp","kunohe.iwate.jp","kuzumaki.iwate.jp","miyako.iwate.jp","mizusawa.iwate.jp","morioka.iwate.jp","ninohe.iwate.jp","noda.iwate.jp","ofunato.iwate.jp","oshu.iwate.jp","otsuchi.iwate.jp","rikuzentakata.iwate.jp","shiwa.iwate.jp","shizukuishi.iwate.jp","sumita.iwate.jp","tanohata.iwate.jp","tono.iwate.jp","yahaba.iwate.jp","yamada.iwate.jp","ayagawa.kagawa.jp","higashikagawa.kagawa.jp","kanonji.kagawa.jp","kotohira.kagawa.jp","manno.kagawa.jp","marugame.kagawa.jp","mitoyo.kagawa.jp","naoshima.kagawa.jp","sanuki.kagawa.jp","tadotsu.kagawa.jp","takamatsu.kagawa.jp","tonosho.kagawa.jp","uchinomi.kagawa.jp","utazu.kagawa.jp","zentsuji.kagawa.jp","akune.kagoshima.jp","amami.kagoshima.jp","hioki.kagoshima.jp","isa.kagoshima.jp","isen.kagoshima.jp","izumi.kagoshima.jp","kagoshima.kagoshima.jp","kanoya.kagoshima.jp","kawanabe.kagoshima.jp","kinko.kagoshima.jp","kouyama.kagoshima.jp","makurazaki.kagoshima.jp","matsumoto.kagoshima.jp","minamitane.kagoshima.jp","nakatane.kagoshima.jp","nishinoomote.kagoshima.jp","satsumasendai.kagoshima.jp","soo.kagoshima.jp","tarumizu.kagoshima.jp","yusui.kagoshima.jp","aikawa.kanagawa.jp","atsugi.kanagawa.jp","ayase.kanagawa.jp","chigasaki.kanagawa.jp","ebina.kanagawa.jp","fujisawa.kanagawa.jp","hadano.kanagawa.jp","hakone.kanagawa.jp","hiratsuka.kanagawa.jp","isehara.kanagawa.jp","kaisei.kanagawa.jp","kamakura.kanagawa.jp","kiyokawa.kanagawa.jp","matsuda.kanagawa.jp","minamiashigara.kanagawa.jp","miura.kanagawa.jp","nakai.kanagawa.jp","ninomiya.kanagawa.jp","odawara.kanagawa.jp","oi.kanagawa.jp","oiso.kanagawa.jp","sagamihara.kanagawa.jp","samukawa.kanagawa.jp","tsukui.kanagawa.jp","yamakita.kanagawa.jp","yamato.kanagawa.jp","yokosuka.kanagawa.jp","yugawara.kanagawa.jp","zama.kanagawa.jp","zushi.kanagawa.jp","aki.kochi.jp","geisei.kochi.jp","hidaka.kochi.jp","higashitsuno.kochi.jp","ino.kochi.jp","kagami.kochi.jp","kami.kochi.jp","kitagawa.kochi.jp","kochi.kochi.jp","mihara.kochi.jp","motoyama.kochi.jp","muroto.kochi.jp","nahari.kochi.jp","nakamura.kochi.jp","nankoku.kochi.jp","nishitosa.kochi.jp","niyodogawa.kochi.jp","ochi.kochi.jp","okawa.kochi.jp","otoyo.kochi.jp","otsuki.kochi.jp","sakawa.kochi.jp","sukumo.kochi.jp","susaki.kochi.jp","tosa.kochi.jp","tosashimizu.kochi.jp","toyo.kochi.jp","tsuno.kochi.jp","umaji.kochi.jp","yasuda.kochi.jp","yusuhara.kochi.jp","amakusa.kumamoto.jp","arao.kumamoto.jp","aso.kumamoto.jp","choyo.kumamoto.jp","gyokuto.kumamoto.jp","kamiamakusa.kumamoto.jp","kikuchi.kumamoto.jp","kumamoto.kumamoto.jp","mashiki.kumamoto.jp","mifune.kumamoto.jp","minamata.kumamoto.jp","minamioguni.kumamoto.jp","nagasu.kumamoto.jp","nishihara.kumamoto.jp","oguni.kumamoto.jp","ozu.kumamoto.jp","sumoto.kumamoto.jp","takamori.kumamoto.jp","uki.kumamoto.jp","uto.kumamoto.jp","yamaga.kumamoto.jp","yamato.kumamoto.jp","yatsushiro.kumamoto.jp","ayabe.kyoto.jp","fukuchiyama.kyoto.jp","higashiyama.kyoto.jp","ide.kyoto.jp","ine.kyoto.jp","joyo.kyoto.jp","kameoka.kyoto.jp","kamo.kyoto.jp","kita.kyoto.jp","kizu.kyoto.jp","kumiyama.kyoto.jp","kyotamba.kyoto.jp","kyotanabe.kyoto.jp","kyotango.kyoto.jp","maizuru.kyoto.jp","minami.kyoto.jp","minamiyamashiro.kyoto.jp","miyazu.kyoto.jp","muko.kyoto.jp","nagaokakyo.kyoto.jp","nakagyo.kyoto.jp","nantan.kyoto.jp","oyamazaki.kyoto.jp","sakyo.kyoto.jp","seika.kyoto.jp","tanabe.kyoto.jp","uji.kyoto.jp","ujitawara.kyoto.jp","wazuka.kyoto.jp","yamashina.kyoto.jp","yawata.kyoto.jp","asahi.mie.jp","inabe.mie.jp","ise.mie.jp","kameyama.mie.jp","kawagoe.mie.jp","kiho.mie.jp","kisosaki.mie.jp","kiwa.mie.jp","komono.mie.jp","kumano.mie.jp","kuwana.mie.jp","matsusaka.mie.jp","meiwa.mie.jp","mihama.mie.jp","minamiise.mie.jp","misugi.mie.jp","miyama.mie.jp","nabari.mie.jp","shima.mie.jp","suzuka.mie.jp","tado.mie.jp","taiki.mie.jp","taki.mie.jp","tamaki.mie.jp","toba.mie.jp","tsu.mie.jp","udono.mie.jp","ureshino.mie.jp","watarai.mie.jp","yokkaichi.mie.jp","furukawa.miyagi.jp","higashimatsushima.miyagi.jp","ishinomaki.miyagi.jp","iwanuma.miyagi.jp","kakuda.miyagi.jp","kami.miyagi.jp","kawasaki.miyagi.jp","marumori.miyagi.jp","matsushima.miyagi.jp","minamisanriku.miyagi.jp","misato.miyagi.jp","murata.miyagi.jp","natori.miyagi.jp","ogawara.miyagi.jp","ohira.miyagi.jp","onagawa.miyagi.jp","osaki.miyagi.jp","rifu.miyagi.jp","semine.miyagi.jp","shibata.miyagi.jp","shichikashuku.miyagi.jp","shikama.miyagi.jp","shiogama.miyagi.jp","shiroishi.miyagi.jp","tagajo.miyagi.jp","taiwa.miyagi.jp","tome.miyagi.jp","tomiya.miyagi.jp","wakuya.miyagi.jp","watari.miyagi.jp","yamamoto.miyagi.jp","zao.miyagi.jp","aya.miyazaki.jp","ebino.miyazaki.jp","gokase.miyazaki.jp","hyuga.miyazaki.jp","kadogawa.miyazaki.jp","kawaminami.miyazaki.jp","kijo.miyazaki.jp","kitagawa.miyazaki.jp","kitakata.miyazaki.jp","kitaura.miyazaki.jp","kobayashi.miyazaki.jp","kunitomi.miyazaki.jp","kushima.miyazaki.jp","mimata.miyazaki.jp","miyakonojo.miyazaki.jp","miyazaki.miyazaki.jp","morotsuka.miyazaki.jp","nichinan.miyazaki.jp","nishimera.miyazaki.jp","nobeoka.miyazaki.jp","saito.miyazaki.jp","shiiba.miyazaki.jp","shintomi.miyazaki.jp","takaharu.miyazaki.jp","takanabe.miyazaki.jp","takazaki.miyazaki.jp","tsuno.miyazaki.jp","achi.nagano.jp","agematsu.nagano.jp","anan.nagano.jp","aoki.nagano.jp","asahi.nagano.jp","azumino.nagano.jp","chikuhoku.nagano.jp","chikuma.nagano.jp","chino.nagano.jp","fujimi.nagano.jp","hakuba.nagano.jp","hara.nagano.jp","hiraya.nagano.jp","iida.nagano.jp","iijima.nagano.jp","iiyama.nagano.jp","iizuna.nagano.jp","ikeda.nagano.jp","ikusaka.nagano.jp","ina.nagano.jp","karuizawa.nagano.jp","kawakami.nagano.jp","kiso.nagano.jp","kisofukushima.nagano.jp","kitaaiki.nagano.jp","komagane.nagano.jp","komoro.nagano.jp","matsukawa.nagano.jp","matsumoto.nagano.jp","miasa.nagano.jp","minamiaiki.nagano.jp","minamimaki.nagano.jp","minamiminowa.nagano.jp","minowa.nagano.jp","miyada.nagano.jp","miyota.nagano.jp","mochizuki.nagano.jp","nagano.nagano.jp","nagawa.nagano.jp","nagiso.nagano.jp","nakagawa.nagano.jp","nakano.nagano.jp","nozawaonsen.nagano.jp","obuse.nagano.jp","ogawa.nagano.jp","okaya.nagano.jp","omachi.nagano.jp","omi.nagano.jp","ookuwa.nagano.jp","ooshika.nagano.jp","otaki.nagano.jp","otari.nagano.jp","sakae.nagano.jp","sakaki.nagano.jp","saku.nagano.jp","sakuho.nagano.jp","shimosuwa.nagano.jp","shinanomachi.nagano.jp","shiojiri.nagano.jp","suwa.nagano.jp","suzaka.nagano.jp","takagi.nagano.jp","takamori.nagano.jp","takayama.nagano.jp","tateshina.nagano.jp","tatsuno.nagano.jp","togakushi.nagano.jp","togura.nagano.jp","tomi.nagano.jp","ueda.nagano.jp","wada.nagano.jp","yamagata.nagano.jp","yamanouchi.nagano.jp","yasaka.nagano.jp","yasuoka.nagano.jp","chijiwa.nagasaki.jp","futsu.nagasaki.jp","goto.nagasaki.jp","hasami.nagasaki.jp","hirado.nagasaki.jp","iki.nagasaki.jp","isahaya.nagasaki.jp","kawatana.nagasaki.jp","kuchinotsu.nagasaki.jp","matsuura.nagasaki.jp","nagasaki.nagasaki.jp","obama.nagasaki.jp","omura.nagasaki.jp","oseto.nagasaki.jp","saikai.nagasaki.jp","sasebo.nagasaki.jp","seihi.nagasaki.jp","shimabara.nagasaki.jp","shinkamigoto.nagasaki.jp","togitsu.nagasaki.jp","tsushima.nagasaki.jp","unzen.nagasaki.jp","ando.nara.jp","gose.nara.jp","heguri.nara.jp","higashiyoshino.nara.jp","ikaruga.nara.jp","ikoma.nara.jp","kamikitayama.nara.jp","kanmaki.nara.jp","kashiba.nara.jp","kashihara.nara.jp","katsuragi.nara.jp","kawai.nara.jp","kawakami.nara.jp","kawanishi.nara.jp","koryo.nara.jp","kurotaki.nara.jp","mitsue.nara.jp","miyake.nara.jp","nara.nara.jp","nosegawa.nara.jp","oji.nara.jp","ouda.nara.jp","oyodo.nara.jp","sakurai.nara.jp","sango.nara.jp","shimoichi.nara.jp","shimokitayama.nara.jp","shinjo.nara.jp","soni.nara.jp","takatori.nara.jp","tawaramoto.nara.jp","tenkawa.nara.jp","tenri.nara.jp","uda.nara.jp","yamatokoriyama.nara.jp","yamatotakada.nara.jp","yamazoe.nara.jp","yoshino.nara.jp","aga.niigata.jp","agano.niigata.jp","gosen.niigata.jp","itoigawa.niigata.jp","izumozaki.niigata.jp","joetsu.niigata.jp","kamo.niigata.jp","kariwa.niigata.jp","kashiwazaki.niigata.jp","minamiuonuma.niigata.jp","mitsuke.niigata.jp","muika.niigata.jp","murakami.niigata.jp","myoko.niigata.jp","nagaoka.niigata.jp","niigata.niigata.jp","ojiya.niigata.jp","omi.niigata.jp","sado.niigata.jp","sanjo.niigata.jp","seiro.niigata.jp","seirou.niigata.jp","sekikawa.niigata.jp","shibata.niigata.jp","tagami.niigata.jp","tainai.niigata.jp","tochio.niigata.jp","tokamachi.niigata.jp","tsubame.niigata.jp","tsunan.niigata.jp","uonuma.niigata.jp","yahiko.niigata.jp","yoita.niigata.jp","yuzawa.niigata.jp","beppu.oita.jp","bungoono.oita.jp","bungotakada.oita.jp","hasama.oita.jp","hiji.oita.jp","himeshima.oita.jp","hita.oita.jp","kamitsue.oita.jp","kokonoe.oita.jp","kuju.oita.jp","kunisaki.oita.jp","kusu.oita.jp","oita.oita.jp","saiki.oita.jp","taketa.oita.jp","tsukumi.oita.jp","usa.oita.jp","usuki.oita.jp","yufu.oita.jp","akaiwa.okayama.jp","asakuchi.okayama.jp","bizen.okayama.jp","hayashima.okayama.jp","ibara.okayama.jp","kagamino.okayama.jp","kasaoka.okayama.jp","kibichuo.okayama.jp","kumenan.okayama.jp","kurashiki.okayama.jp","maniwa.okayama.jp","misaki.okayama.jp","nagi.okayama.jp","niimi.okayama.jp","nishiawakura.okayama.jp","okayama.okayama.jp","satosho.okayama.jp","setouchi.okayama.jp","shinjo.okayama.jp","shoo.okayama.jp","soja.okayama.jp","takahashi.okayama.jp","tamano.okayama.jp","tsuyama.okayama.jp","wake.okayama.jp","yakage.okayama.jp","aguni.okinawa.jp","ginowan.okinawa.jp","ginoza.okinawa.jp","gushikami.okinawa.jp","haebaru.okinawa.jp","higashi.okinawa.jp","hirara.okinawa.jp","iheya.okinawa.jp","ishigaki.okinawa.jp","ishikawa.okinawa.jp","itoman.okinawa.jp","izena.okinawa.jp","kadena.okinawa.jp","kin.okinawa.jp","kitadaito.okinawa.jp","kitanakagusuku.okinawa.jp","kumejima.okinawa.jp","kunigami.okinawa.jp","minamidaito.okinawa.jp","motobu.okinawa.jp","nago.okinawa.jp","naha.okinawa.jp","nakagusuku.okinawa.jp","nakijin.okinawa.jp","nanjo.okinawa.jp","nishihara.okinawa.jp","ogimi.okinawa.jp","okinawa.okinawa.jp","onna.okinawa.jp","shimoji.okinawa.jp","taketomi.okinawa.jp","tarama.okinawa.jp","tokashiki.okinawa.jp","tomigusuku.okinawa.jp","tonaki.okinawa.jp","urasoe.okinawa.jp","uruma.okinawa.jp","yaese.okinawa.jp","yomitan.okinawa.jp","yonabaru.okinawa.jp","yonaguni.okinawa.jp","zamami.okinawa.jp","abeno.osaka.jp","chihayaakasaka.osaka.jp","chuo.osaka.jp","daito.osaka.jp","fujiidera.osaka.jp","habikino.osaka.jp","hannan.osaka.jp","higashiosaka.osaka.jp","higashisumiyoshi.osaka.jp","higashiyodogawa.osaka.jp","hirakata.osaka.jp","ibaraki.osaka.jp","ikeda.osaka.jp","izumi.osaka.jp","izumiotsu.osaka.jp","izumisano.osaka.jp","kadoma.osaka.jp","kaizuka.osaka.jp","kanan.osaka.jp","kashiwara.osaka.jp","katano.osaka.jp","kawachinagano.osaka.jp","kishiwada.osaka.jp","kita.osaka.jp","kumatori.osaka.jp","matsubara.osaka.jp","minato.osaka.jp","minoh.osaka.jp","misaki.osaka.jp","moriguchi.osaka.jp","neyagawa.osaka.jp","nishi.osaka.jp","nose.osaka.jp","osakasayama.osaka.jp","sakai.osaka.jp","sayama.osaka.jp","sennan.osaka.jp","settsu.osaka.jp","shijonawate.osaka.jp","shimamoto.osaka.jp","suita.osaka.jp","tadaoka.osaka.jp","taishi.osaka.jp","tajiri.osaka.jp","takaishi.osaka.jp","takatsuki.osaka.jp","tondabayashi.osaka.jp","toyonaka.osaka.jp","toyono.osaka.jp","yao.osaka.jp","ariake.saga.jp","arita.saga.jp","fukudomi.saga.jp","genkai.saga.jp","hamatama.saga.jp","hizen.saga.jp","imari.saga.jp","kamimine.saga.jp","kanzaki.saga.jp","karatsu.saga.jp","kashima.saga.jp","kitagata.saga.jp","kitahata.saga.jp","kiyama.saga.jp","kouhoku.saga.jp","kyuragi.saga.jp","nishiarita.saga.jp","ogi.saga.jp","omachi.saga.jp","ouchi.saga.jp","saga.saga.jp","shiroishi.saga.jp","taku.saga.jp","tara.saga.jp","tosu.saga.jp","yoshinogari.saga.jp","arakawa.saitama.jp","asaka.saitama.jp","chichibu.saitama.jp","fujimi.saitama.jp","fujimino.saitama.jp","fukaya.saitama.jp","hanno.saitama.jp","hanyu.saitama.jp","hasuda.saitama.jp","hatogaya.saitama.jp","hatoyama.saitama.jp","hidaka.saitama.jp","higashichichibu.saitama.jp","higashimatsuyama.saitama.jp","honjo.saitama.jp","ina.saitama.jp","iruma.saitama.jp","iwatsuki.saitama.jp","kamiizumi.saitama.jp","kamikawa.saitama.jp","kamisato.saitama.jp","kasukabe.saitama.jp","kawagoe.saitama.jp","kawaguchi.saitama.jp","kawajima.saitama.jp","kazo.saitama.jp","kitamoto.saitama.jp","koshigaya.saitama.jp","kounosu.saitama.jp","kuki.saitama.jp","kumagaya.saitama.jp","matsubushi.saitama.jp","minano.saitama.jp","misato.saitama.jp","miyashiro.saitama.jp","miyoshi.saitama.jp","moroyama.saitama.jp","nagatoro.saitama.jp","namegawa.saitama.jp","niiza.saitama.jp","ogano.saitama.jp","ogawa.saitama.jp","ogose.saitama.jp","okegawa.saitama.jp","omiya.saitama.jp","otaki.saitama.jp","ranzan.saitama.jp","ryokami.saitama.jp","saitama.saitama.jp","sakado.saitama.jp","satte.saitama.jp","sayama.saitama.jp","shiki.saitama.jp","shiraoka.saitama.jp","soka.saitama.jp","sugito.saitama.jp","toda.saitama.jp","tokigawa.saitama.jp","tokorozawa.saitama.jp","tsurugashima.saitama.jp","urawa.saitama.jp","warabi.saitama.jp","yashio.saitama.jp","yokoze.saitama.jp","yono.saitama.jp","yorii.saitama.jp","yoshida.saitama.jp","yoshikawa.saitama.jp","yoshimi.saitama.jp","aisho.shiga.jp","gamo.shiga.jp","higashiomi.shiga.jp","hikone.shiga.jp","koka.shiga.jp","konan.shiga.jp","kosei.shiga.jp","koto.shiga.jp","kusatsu.shiga.jp","maibara.shiga.jp","moriyama.shiga.jp","nagahama.shiga.jp","nishiazai.shiga.jp","notogawa.shiga.jp","omihachiman.shiga.jp","otsu.shiga.jp","ritto.shiga.jp","ryuoh.shiga.jp","takashima.shiga.jp","takatsuki.shiga.jp","torahime.shiga.jp","toyosato.shiga.jp","yasu.shiga.jp","akagi.shimane.jp","ama.shimane.jp","gotsu.shimane.jp","hamada.shimane.jp","higashiizumo.shimane.jp","hikawa.shimane.jp","hikimi.shimane.jp","izumo.shimane.jp","kakinoki.shimane.jp","masuda.shimane.jp","matsue.shimane.jp","misato.shimane.jp","nishinoshima.shimane.jp","ohda.shimane.jp","okinoshima.shimane.jp","okuizumo.shimane.jp","shimane.shimane.jp","tamayu.shimane.jp","tsuwano.shimane.jp","unnan.shimane.jp","yakumo.shimane.jp","yasugi.shimane.jp","yatsuka.shimane.jp","arai.shizuoka.jp","atami.shizuoka.jp","fuji.shizuoka.jp","fujieda.shizuoka.jp","fujikawa.shizuoka.jp","fujinomiya.shizuoka.jp","fukuroi.shizuoka.jp","gotemba.shizuoka.jp","haibara.shizuoka.jp","hamamatsu.shizuoka.jp","higashiizu.shizuoka.jp","ito.shizuoka.jp","iwata.shizuoka.jp","izu.shizuoka.jp","izunokuni.shizuoka.jp","kakegawa.shizuoka.jp","kannami.shizuoka.jp","kawanehon.shizuoka.jp","kawazu.shizuoka.jp","kikugawa.shizuoka.jp","kosai.shizuoka.jp","makinohara.shizuoka.jp","matsuzaki.shizuoka.jp","minamiizu.shizuoka.jp","mishima.shizuoka.jp","morimachi.shizuoka.jp","nishiizu.shizuoka.jp","numazu.shizuoka.jp","omaezaki.shizuoka.jp","shimada.shizuoka.jp","shimizu.shizuoka.jp","shimoda.shizuoka.jp","shizuoka.shizuoka.jp","susono.shizuoka.jp","yaizu.shizuoka.jp","yoshida.shizuoka.jp","ashikaga.tochigi.jp","bato.tochigi.jp","haga.tochigi.jp","ichikai.tochigi.jp","iwafune.tochigi.jp","kaminokawa.tochigi.jp","kanuma.tochigi.jp","karasuyama.tochigi.jp","kuroiso.tochigi.jp","mashiko.tochigi.jp","mibu.tochigi.jp","moka.tochigi.jp","motegi.tochigi.jp","nasu.tochigi.jp","nasushiobara.tochigi.jp","nikko.tochigi.jp","nishikata.tochigi.jp","nogi.tochigi.jp","ohira.tochigi.jp","ohtawara.tochigi.jp","oyama.tochigi.jp","sakura.tochigi.jp","sano.tochigi.jp","shimotsuke.tochigi.jp","shioya.tochigi.jp","takanezawa.tochigi.jp","tochigi.tochigi.jp","tsuga.tochigi.jp","ujiie.tochigi.jp","utsunomiya.tochigi.jp","yaita.tochigi.jp","aizumi.tokushima.jp","anan.tokushima.jp","ichiba.tokushima.jp","itano.tokushima.jp","kainan.tokushima.jp","komatsushima.tokushima.jp","matsushige.tokushima.jp","mima.tokushima.jp","minami.tokushima.jp","miyoshi.tokushima.jp","mugi.tokushima.jp","nakagawa.tokushima.jp","naruto.tokushima.jp","sanagochi.tokushima.jp","shishikui.tokushima.jp","tokushima.tokushima.jp","wajiki.tokushima.jp","adachi.tokyo.jp","akiruno.tokyo.jp","akishima.tokyo.jp","aogashima.tokyo.jp","arakawa.tokyo.jp","bunkyo.tokyo.jp","chiyoda.tokyo.jp","chofu.tokyo.jp","chuo.tokyo.jp","edogawa.tokyo.jp","fuchu.tokyo.jp","fussa.tokyo.jp","hachijo.tokyo.jp","hachioji.tokyo.jp","hamura.tokyo.jp","higashikurume.tokyo.jp","higashimurayama.tokyo.jp","higashiyamato.tokyo.jp","hino.tokyo.jp","hinode.tokyo.jp","hinohara.tokyo.jp","inagi.tokyo.jp","itabashi.tokyo.jp","katsushika.tokyo.jp","kita.tokyo.jp","kiyose.tokyo.jp","kodaira.tokyo.jp","koganei.tokyo.jp","kokubunji.tokyo.jp","komae.tokyo.jp","koto.tokyo.jp","kouzushima.tokyo.jp","kunitachi.tokyo.jp","machida.tokyo.jp","meguro.tokyo.jp","minato.tokyo.jp","mitaka.tokyo.jp","mizuho.tokyo.jp","musashimurayama.tokyo.jp","musashino.tokyo.jp","nakano.tokyo.jp","nerima.tokyo.jp","ogasawara.tokyo.jp","okutama.tokyo.jp","ome.tokyo.jp","oshima.tokyo.jp","ota.tokyo.jp","setagaya.tokyo.jp","shibuya.tokyo.jp","shinagawa.tokyo.jp","shinjuku.tokyo.jp","suginami.tokyo.jp","sumida.tokyo.jp","tachikawa.tokyo.jp","taito.tokyo.jp","tama.tokyo.jp","toshima.tokyo.jp","chizu.tottori.jp","hino.tottori.jp","kawahara.tottori.jp","koge.tottori.jp","kotoura.tottori.jp","misasa.tottori.jp","nanbu.tottori.jp","nichinan.tottori.jp","sakaiminato.tottori.jp","tottori.tottori.jp","wakasa.tottori.jp","yazu.tottori.jp","yonago.tottori.jp","asahi.toyama.jp","fuchu.toyama.jp","fukumitsu.toyama.jp","funahashi.toyama.jp","himi.toyama.jp","imizu.toyama.jp","inami.toyama.jp","johana.toyama.jp","kamiichi.toyama.jp","kurobe.toyama.jp","nakaniikawa.toyama.jp","namerikawa.toyama.jp","nanto.toyama.jp","nyuzen.toyama.jp","oyabe.toyama.jp","taira.toyama.jp","takaoka.toyama.jp","tateyama.toyama.jp","toga.toyama.jp","tonami.toyama.jp","toyama.toyama.jp","unazuki.toyama.jp","uozu.toyama.jp","yamada.toyama.jp","arida.wakayama.jp","aridagawa.wakayama.jp","gobo.wakayama.jp","hashimoto.wakayama.jp","hidaka.wakayama.jp","hirogawa.wakayama.jp","inami.wakayama.jp","iwade.wakayama.jp","kainan.wakayama.jp","kamitonda.wakayama.jp","katsuragi.wakayama.jp","kimino.wakayama.jp","kinokawa.wakayama.jp","kitayama.wakayama.jp","koya.wakayama.jp","koza.wakayama.jp","kozagawa.wakayama.jp","kudoyama.wakayama.jp","kushimoto.wakayama.jp","mihama.wakayama.jp","misato.wakayama.jp","nachikatsuura.wakayama.jp","shingu.wakayama.jp","shirahama.wakayama.jp","taiji.wakayama.jp","tanabe.wakayama.jp","wakayama.wakayama.jp","yuasa.wakayama.jp","yura.wakayama.jp","asahi.yamagata.jp","funagata.yamagata.jp","higashine.yamagata.jp","iide.yamagata.jp","kahoku.yamagata.jp","kaminoyama.yamagata.jp","kaneyama.yamagata.jp","kawanishi.yamagata.jp","mamurogawa.yamagata.jp","mikawa.yamagata.jp","murayama.yamagata.jp","nagai.yamagata.jp","nakayama.yamagata.jp","nanyo.yamagata.jp","nishikawa.yamagata.jp","obanazawa.yamagata.jp","oe.yamagata.jp","oguni.yamagata.jp","ohkura.yamagata.jp","oishida.yamagata.jp","sagae.yamagata.jp","sakata.yamagata.jp","sakegawa.yamagata.jp","shinjo.yamagata.jp","shirataka.yamagata.jp","shonai.yamagata.jp","takahata.yamagata.jp","tendo.yamagata.jp","tozawa.yamagata.jp","tsuruoka.yamagata.jp","yamagata.yamagata.jp","yamanobe.yamagata.jp","yonezawa.yamagata.jp","yuza.yamagata.jp","abu.yamaguchi.jp","hagi.yamaguchi.jp","hikari.yamaguchi.jp","hofu.yamaguchi.jp","iwakuni.yamaguchi.jp","kudamatsu.yamaguchi.jp","mitou.yamaguchi.jp","nagato.yamaguchi.jp","oshima.yamaguchi.jp","shimonoseki.yamaguchi.jp","shunan.yamaguchi.jp","tabuse.yamaguchi.jp","tokuyama.yamaguchi.jp","toyota.yamaguchi.jp","ube.yamaguchi.jp","yuu.yamaguchi.jp","chuo.yamanashi.jp","doshi.yamanashi.jp","fuefuki.yamanashi.jp","fujikawa.yamanashi.jp","fujikawaguchiko.yamanashi.jp","fujiyoshida.yamanashi.jp","hayakawa.yamanashi.jp","hokuto.yamanashi.jp","ichikawamisato.yamanashi.jp","kai.yamanashi.jp","kofu.yamanashi.jp","koshu.yamanashi.jp","kosuge.yamanashi.jp","minami-alps.yamanashi.jp","minobu.yamanashi.jp","nakamichi.yamanashi.jp","nanbu.yamanashi.jp","narusawa.yamanashi.jp","nirasaki.yamanashi.jp","nishikatsura.yamanashi.jp","oshino.yamanashi.jp","otsuki.yamanashi.jp","showa.yamanashi.jp","tabayama.yamanashi.jp","tsuru.yamanashi.jp","uenohara.yamanashi.jp","yamanakako.yamanashi.jp","yamanashi.yamanashi.jp","ke","ac.ke","co.ke","go.ke","info.ke","me.ke","mobi.ke","ne.ke","or.ke","sc.ke","kg","org.kg","net.kg","com.kg","edu.kg","gov.kg","mil.kg","*.kh","ki","edu.ki","biz.ki","net.ki","org.ki","gov.ki","info.ki","com.ki","km","org.km","nom.km","gov.km","prd.km","tm.km","edu.km","mil.km","ass.km","com.km","coop.km","asso.km","presse.km","medecin.km","notaires.km","pharmaciens.km","veterinaire.km","gouv.km","kn","net.kn","org.kn","edu.kn","gov.kn","kp","com.kp","edu.kp","gov.kp","org.kp","rep.kp","tra.kp","kr","ac.kr","co.kr","es.kr","go.kr","hs.kr","kg.kr","mil.kr","ms.kr","ne.kr","or.kr","pe.kr","re.kr","sc.kr","busan.kr","chungbuk.kr","chungnam.kr","daegu.kr","daejeon.kr","gangwon.kr","gwangju.kr","gyeongbuk.kr","gyeonggi.kr","gyeongnam.kr","incheon.kr","jeju.kr","jeonbuk.kr","jeonnam.kr","seoul.kr","ulsan.kr","kw","com.kw","edu.kw","emb.kw","gov.kw","ind.kw","net.kw","org.kw","ky","edu.ky","gov.ky","com.ky","org.ky","net.ky","kz","org.kz","edu.kz","net.kz","gov.kz","mil.kz","com.kz","la","int.la","net.la","info.la","edu.la","gov.la","per.la","com.la","org.la","lb","com.lb","edu.lb","gov.lb","net.lb","org.lb","lc","com.lc","net.lc","co.lc","org.lc","edu.lc","gov.lc","li","lk","gov.lk","sch.lk","net.lk","int.lk","com.lk","org.lk","edu.lk","ngo.lk","soc.lk","web.lk","ltd.lk","assn.lk","grp.lk","hotel.lk","ac.lk","lr","com.lr","edu.lr","gov.lr","org.lr","net.lr","ls","co.ls","org.ls","lt","gov.lt","lu","lv","com.lv","edu.lv","gov.lv","org.lv","mil.lv","id.lv","net.lv","asn.lv","conf.lv","ly","com.ly","net.ly","gov.ly","plc.ly","edu.ly","sch.ly","med.ly","org.ly","id.ly","ma","co.ma","net.ma","gov.ma","org.ma","ac.ma","press.ma","mc","tm.mc","asso.mc","md","me","co.me","net.me","org.me","edu.me","ac.me","gov.me","its.me","priv.me","mg","org.mg","nom.mg","gov.mg","prd.mg","tm.mg","edu.mg","mil.mg","com.mg","co.mg","mh","mil","mk","com.mk","org.mk","net.mk","edu.mk","gov.mk","inf.mk","name.mk","ml","com.ml","edu.ml","gouv.ml","gov.ml","net.ml","org.ml","presse.ml","*.mm","mn","gov.mn","edu.mn","org.mn","mo","com.mo","net.mo","org.mo","edu.mo","gov.mo","mobi","mp","mq","mr","gov.mr","ms","com.ms","edu.ms","gov.ms","net.ms","org.ms","mt","com.mt","edu.mt","net.mt","org.mt","mu","com.mu","net.mu","org.mu","gov.mu","ac.mu","co.mu","or.mu","museum","academy.museum","agriculture.museum","air.museum","airguard.museum","alabama.museum","alaska.museum","amber.museum","ambulance.museum","american.museum","americana.museum","americanantiques.museum","americanart.museum","amsterdam.museum","and.museum","annefrank.museum","anthro.museum","anthropology.museum","antiques.museum","aquarium.museum","arboretum.museum","archaeological.museum","archaeology.museum","architecture.museum","art.museum","artanddesign.museum","artcenter.museum","artdeco.museum","arteducation.museum","artgallery.museum","arts.museum","artsandcrafts.museum","asmatart.museum","assassination.museum","assisi.museum","association.museum","astronomy.museum","atlanta.museum","austin.museum","australia.museum","automotive.museum","aviation.museum","axis.museum","badajoz.museum","baghdad.museum","bahn.museum","bale.museum","baltimore.museum","barcelona.museum","baseball.museum","basel.museum","baths.museum","bauern.museum","beauxarts.museum","beeldengeluid.museum","bellevue.museum","bergbau.museum","berkeley.museum","berlin.museum","bern.museum","bible.museum","bilbao.museum","bill.museum","birdart.museum","birthplace.museum","bonn.museum","boston.museum","botanical.museum","botanicalgarden.museum","botanicgarden.museum","botany.museum","brandywinevalley.museum","brasil.museum","bristol.museum","british.museum","britishcolumbia.museum","broadcast.museum","brunel.museum","brussel.museum","brussels.museum","bruxelles.museum","building.museum","burghof.museum","bus.museum","bushey.museum","cadaques.museum","california.museum","cambridge.museum","can.museum","canada.museum","capebreton.museum","carrier.museum","cartoonart.museum","casadelamoneda.museum","castle.museum","castres.museum","celtic.museum","center.museum","chattanooga.museum","cheltenham.museum","chesapeakebay.museum","chicago.museum","children.museum","childrens.museum","childrensgarden.museum","chiropractic.museum","chocolate.museum","christiansburg.museum","cincinnati.museum","cinema.museum","circus.museum","civilisation.museum","civilization.museum","civilwar.museum","clinton.museum","clock.museum","coal.museum","coastaldefence.museum","cody.museum","coldwar.museum","collection.museum","colonialwilliamsburg.museum","coloradoplateau.museum","columbia.museum","columbus.museum","communication.museum","communications.museum","community.museum","computer.museum","computerhistory.museum","comunicações.museum","contemporary.museum","contemporaryart.museum","convent.museum","copenhagen.museum","corporation.museum","correios-e-telecomunicações.museum","corvette.museum","costume.museum","countryestate.museum","county.museum","crafts.museum","cranbrook.museum","creation.museum","cultural.museum","culturalcenter.museum","culture.museum","cyber.museum","cymru.museum","dali.museum","dallas.museum","database.museum","ddr.museum","decorativearts.museum","delaware.museum","delmenhorst.museum","denmark.museum","depot.museum","design.museum","detroit.museum","dinosaur.museum","discovery.museum","dolls.museum","donostia.museum","durham.museum","eastafrica.museum","eastcoast.museum","education.museum","educational.museum","egyptian.museum","eisenbahn.museum","elburg.museum","elvendrell.museum","embroidery.museum","encyclopedic.museum","england.museum","entomology.museum","environment.museum","environmentalconservation.museum","epilepsy.museum","essex.museum","estate.museum","ethnology.museum","exeter.museum","exhibition.museum","family.museum","farm.museum","farmequipment.museum","farmers.museum","farmstead.museum","field.museum","figueres.museum","filatelia.museum","film.museum","fineart.museum","finearts.museum","finland.museum","flanders.museum","florida.museum","force.museum","fortmissoula.museum","fortworth.museum","foundation.museum","francaise.museum","frankfurt.museum","franziskaner.museum","freemasonry.museum","freiburg.museum","fribourg.museum","frog.museum","fundacio.museum","furniture.museum","gallery.museum","garden.museum","gateway.museum","geelvinck.museum","gemological.museum","geology.museum","georgia.museum","giessen.museum","glas.museum","glass.museum","gorge.museum","grandrapids.museum","graz.museum","guernsey.museum","halloffame.museum","hamburg.museum","handson.museum","harvestcelebration.museum","hawaii.museum","health.museum","heimatunduhren.museum","hellas.museum","helsinki.museum","hembygdsforbund.museum","heritage.museum","histoire.museum","historical.museum","historicalsociety.museum","historichouses.museum","historisch.museum","historisches.museum","history.museum","historyofscience.museum","horology.museum","house.museum","humanities.museum","illustration.museum","imageandsound.museum","indian.museum","indiana.museum","indianapolis.museum","indianmarket.museum","intelligence.museum","interactive.museum","iraq.museum","iron.museum","isleofman.museum","jamison.museum","jefferson.museum","jerusalem.museum","jewelry.museum","jewish.museum","jewishart.museum","jfk.museum","journalism.museum","judaica.museum","judygarland.museum","juedisches.museum","juif.museum","karate.museum","karikatur.museum","kids.museum","koebenhavn.museum","koeln.museum","kunst.museum","kunstsammlung.museum","kunstunddesign.museum","labor.museum","labour.museum","lajolla.museum","lancashire.museum","landes.museum","lans.museum","läns.museum","larsson.museum","lewismiller.museum","lincoln.museum","linz.museum","living.museum","livinghistory.museum","localhistory.museum","london.museum","losangeles.museum","louvre.museum","loyalist.museum","lucerne.museum","luxembourg.museum","luzern.museum","mad.museum","madrid.museum","mallorca.museum","manchester.museum","mansion.museum","mansions.museum","manx.museum","marburg.museum","maritime.museum","maritimo.museum","maryland.museum","marylhurst.museum","media.museum","medical.museum","medizinhistorisches.museum","meeres.museum","memorial.museum","mesaverde.museum","michigan.museum","midatlantic.museum","military.museum","mill.museum","miners.museum","mining.museum","minnesota.museum","missile.museum","missoula.museum","modern.museum","moma.museum","money.museum","monmouth.museum","monticello.museum","montreal.museum","moscow.museum","motorcycle.museum","muenchen.museum","muenster.museum","mulhouse.museum","muncie.museum","museet.museum","museumcenter.museum","museumvereniging.museum","music.museum","national.museum","nationalfirearms.museum","nationalheritage.museum","nativeamerican.museum","naturalhistory.museum","naturalhistorymuseum.museum","naturalsciences.museum","nature.museum","naturhistorisches.museum","natuurwetenschappen.museum","naumburg.museum","naval.museum","nebraska.museum","neues.museum","newhampshire.museum","newjersey.museum","newmexico.museum","newport.museum","newspaper.museum","newyork.museum","niepce.museum","norfolk.museum","north.museum","nrw.museum","nuernberg.museum","nuremberg.museum","nyc.museum","nyny.museum","oceanographic.museum","oceanographique.museum","omaha.museum","online.museum","ontario.museum","openair.museum","oregon.museum","oregontrail.museum","otago.museum","oxford.museum","pacific.museum","paderborn.museum","palace.museum","paleo.museum","palmsprings.museum","panama.museum","paris.museum","pasadena.museum","pharmacy.museum","philadelphia.museum","philadelphiaarea.museum","philately.museum","phoenix.museum","photography.museum","pilots.museum","pittsburgh.museum","planetarium.museum","plantation.museum","plants.museum","plaza.museum","portal.museum","portland.museum","portlligat.museum","posts-and-telecommunications.museum","xyz","yachts","yahoo","yamaxun","yandex","yodobashi","yoga","yokohama","you","youtube","yun","zappos","zara","zero","zip","zippo","zone","zuerich","cc.ua","inf.ua","ltd.ua","beep.pl","*.compute.estate","*.alces.network","alwaysdata.net","cloudfront.net","*.compute.amazonaws.com","*.compute-1.amazonaws.com","*.compute.amazonaws.com.cn","us-east-1.amazonaws.com","cn-north-1.eb.amazonaws.com.cn","cn-northwest-1.eb.amazonaws.com.cn","elasticbeanstalk.com","ap-northeast-1.elasticbeanstalk.com","ap-northeast-2.elasticbeanstalk.com","ap-northeast-3.elasticbeanstalk.com","ap-south-1.elasticbeanstalk.com","ap-southeast-1.elasticbeanstalk.com","ap-southeast-2.elasticbeanstalk.com","ca-central-1.elasticbeanstalk.com","eu-central-1.elasticbeanstalk.com","eu-west-1.elasticbeanstalk.com","eu-west-2.elasticbeanstalk.com","eu-west-3.elasticbeanstalk.com","sa-east-1.elasticbeanstalk.com","us-east-1.elasticbeanstalk.com","us-east-2.elasticbeanstalk.com","us-gov-west-1.elasticbeanstalk.com","us-west-1.elasticbeanstalk.com","us-west-2.elasticbeanstalk.com","*.elb.amazonaws.com","*.elb.amazonaws.com.cn","s3.amazonaws.com","s3-ap-northeast-1.amazonaws.com","s3-ap-northeast-2.amazonaws.com","s3-ap-south-1.amazonaws.com","s3-ap-southeast-1.amazonaws.com","s3-ap-southeast-2.amazonaws.com","s3-ca-central-1.amazonaws.com","s3-eu-central-1.amazonaws.com","s3-eu-west-1.amazonaws.com","s3-eu-west-2.amazonaws.com","s3-eu-west-3.amazonaws.com","s3-external-1.amazonaws.com","s3-fips-us-gov-west-1.amazonaws.com","s3-sa-east-1.amazonaws.com","s3-us-gov-west-1.amazonaws.com","s3-us-east-2.amazonaws.com","s3-us-west-1.amazonaws.com","s3-us-west-2.amazonaws.com","s3.ap-northeast-2.amazonaws.com","s3.ap-south-1.amazonaws.com","s3.cn-north-1.amazonaws.com.cn","s3.ca-central-1.amazonaws.com","s3.eu-central-1.amazonaws.com","s3.eu-west-2.amazonaws.com","s3.eu-west-3.amazonaws.com","s3.us-east-2.amazonaws.com","s3.dualstack.ap-northeast-1.amazonaws.com","s3.dualstack.ap-northeast-2.amazonaws.com","s3.dualstack.ap-south-1.amazonaws.com","s3.dualstack.ap-southeast-1.amazonaws.com","s3.dualstack.ap-southeast-2.amazonaws.com","s3.dualstack.ca-central-1.amazonaws.com","s3.dualstack.eu-central-1.amazonaws.com","s3.dualstack.eu-west-1.amazonaws.com","s3.dualstack.eu-west-2.amazonaws.com","s3.dualstack.eu-west-3.amazonaws.com","s3.dualstack.sa-east-1.amazonaws.com","s3.dualstack.us-east-1.amazonaws.com","s3.dualstack.us-east-2.amazonaws.com","s3-website-us-east-1.amazonaws.com","s3-website-us-west-1.amazonaws.com","s3-website-us-west-2.amazonaws.com","s3-website-ap-northeast-1.amazonaws.com","s3-website-ap-southeast-1.amazonaws.com","s3-website-ap-southeast-2.amazonaws.com","s3-website-eu-west-1.amazonaws.com","s3-website-sa-east-1.amazonaws.com","s3-website.ap-northeast-2.amazonaws.com","s3-website.ap-south-1.amazonaws.com","s3-website.ca-central-1.amazonaws.com","s3-website.eu-central-1.amazonaws.com","s3-website.eu-west-2.amazonaws.com","s3-website.eu-west-3.amazonaws.com","s3-website.us-east-2.amazonaws.com","t3l3p0rt.net","tele.amune.org","apigee.io","on-aptible.com","user.party.eus","pimienta.org","poivron.org","potager.org","sweetpepper.org","myasustor.com","myfritz.net","*.awdev.ca","*.advisor.ws","backplaneapp.io","betainabox.com","bnr.la","blackbaudcdn.net","boomla.net","boxfuse.io","square7.ch","bplaced.com","bplaced.de","square7.de","bplaced.net","square7.net","browsersafetymark.io","mycd.eu","ae.org","ar.com","br.com","cn.com","com.de","com.se","de.com","eu.com","gb.com","gb.net","hu.com","hu.net","jp.net","jpn.com","kr.com","mex.com","no.com","qc.com","ru.com","sa.com","se.net","uk.com","uk.net","us.com","uy.com","za.bz","za.com","africa.com","gr.com","in.net","us.org","co.com","c.la","certmgr.org","xenapponazure.com","virtueeldomein.nl","cleverapps.io","c66.me","cloud66.ws","jdevcloud.com","wpdevcloud.com","cloudaccess.host","freesite.host","cloudaccess.net","cloudcontrolled.com","cloudcontrolapp.com","co.ca","*.otap.co","co.cz","c.cdn77.org","cdn77-ssl.net","r.cdn77.net","rsc.cdn77.org","ssl.origin.cdn77-secure.org","cloudns.asia","cloudns.biz","cloudns.club","cloudns.cc","cloudns.eu","cloudns.in","cloudns.info","cloudns.org","cloudns.pro","cloudns.pw","cloudns.us","cloudeity.net","cnpy.gdn","co.nl","co.no","webhosting.be","hosting-cluster.nl","dyn.cosidns.de","dynamisches-dns.de","dnsupdater.de","internet-dns.de","l-o-g-i-n.de","dynamic-dns.info","feste-ip.net","knx-server.net","static-access.net","realm.cz","*.cryptonomic.net","cupcake.is","cyon.link","cyon.site","daplie.me","localhost.daplie.me","dattolocal.com","dattorelay.com","dattoweb.com","mydatto.com","dattolocal.net","mydatto.net","biz.dk","co.dk","firm.dk","reg.dk","store.dk","debian.net","dedyn.io","dnshome.de","drayddns.com","dreamhosters.com","mydrobo.com","drud.io","drud.us","duckdns.org","dy.fi","tunk.org","dyndns-at-home.com","dyndns-at-work.com","dyndns-blog.com","dyndns-free.com","dyndns-home.com","dyndns-ip.com","dyndns-mail.com","dyndns-office.com","dyndns-pics.com","dyndns-remote.com","dyndns-server.com","dyndns-web.com","dyndns-wiki.com","dyndns-work.com","dyndns.biz","dyndns.info","dyndns.org","dyndns.tv","at-band-camp.net","fbx-os.fr","fbxos.fr","freebox-os.fr","freeboxos.fr","freedesktop.org","*.futurecms.at","*.ex.futurecms.at","*.in.futurecms.at","futurehosting.at","futuremailing.at","*.ex.ortsinfo.at","*.kunden.ortsinfo.at","*.statics.cloud","service.gov.uk","github.io","githubusercontent.com","gitlab.io","homeoffice.gov.uk","ro.im","shop.ro","goip.de","*.0emm.com","appspot.com","blogspot.ae","blogspot.al","blogspot.am","blogspot.ba","blogspot.be","blogspot.bg","blogspot.bj","blogspot.ca","blogspot.cf","blogspot.ch","blogspot.cl","blogspot.co.at","blogspot.co.id","blogspot.co.il","blogspot.co.ke","blogspot.co.nz","blogspot.co.uk","blogspot.co.za","blogspot.com","blogspot.com.ar","blogspot.com.au","blogspot.com.br","blogspot.com.by","blogspot.com.co","blogspot.com.cy","blogspot.com.ee","blogspot.com.eg","blogspot.com.es","blogspot.com.mt","blogspot.com.ng","blogspot.com.tr","blogspot.com.uy","blogspot.cv","blogspot.cz","blogspot.de","blogspot.dk","blogspot.fi","blogspot.fr","blogspot.gr","blogspot.hk","blogspot.hr","blogspot.hu","blogspot.ie","blogspot.in","blogspot.is","blogspot.it","blogspot.jp","blogspot.kr","blogspot.li","blogspot.lt","blogspot.lu","blogspot.md","blogspot.mk","blogspot.mr","blogspot.mx","blogspot.my","blogspot.nl","blogspot.no","blogspot.pe","blogspot.pt","blogspot.qa","blogspot.re","blogspot.ro","blogspot.rs","blogspot.ru","blogspot.se","blogspot.sg","blogspot.si","blogspot.sk","blogspot.sn","blogspot.td","blogspot.tw","blogspot.ug","blogspot.vn","cloudfunctions.net","cloud.goog","codespot.com","googleapis.com","googlecode.com","pagespeedmobilizer.com","publishproxy.com","withgoogle.com","withyoutube.com","hashbang.sh","hasura.app","hasura-app.io","hepforge.org","herokuapp.com","herokussl.com","myravendb.com","ravendb.community","ravendb.me","development.run","ravendb.run","moonscale.net","iki.fi","biz.at","info.at","info.cx","ac.leg.br","al.leg.br","am.leg.br","ap.leg.br","ba.leg.br","ce.leg.br","df.leg.br","es.leg.br","go.leg.br","ma.leg.br","mg.leg.br","ms.leg.br","mt.leg.br","pa.leg.br","pb.leg.br","pe.leg.br","pi.leg.br","pr.leg.br","rj.leg.br","rn.leg.br","ro.leg.br","rr.leg.br","rs.leg.br","sc.leg.br","se.leg.br","sp.leg.br","to.leg.br","pixolino.com","ipifony.net","mein-iserv.de","test-iserv.de","myjino.ru","*.hosting.myjino.ru","*.landing.myjino.ru","*.spectrum.myjino.ru","*.vps.myjino.ru","*.triton.zone","*.cns.joyent.com","js.org","keymachine.de","knightpoint.systems","co.krd","edu.krd","git-repos.de","lcube-server.de","svn-repos.de","app.lmpm.com","linkitools.space","linkyard.cloud","linkyard-cloud.ch","we.bs","uklugs.org","glug.org.uk","lug.org.uk","lugs.org.uk","barsy.bg","barsy.co.uk","barsyonline.co.uk","barsycenter.com","barsyonline.com","barsy.club","barsy.de","barsy.eu","barsy.in","barsy.info","barsy.io","barsy.me","barsy.menu","barsy.mobi","barsy.net","barsy.online","barsy.org","barsy.pro","barsy.pub","barsy.shop","barsy.site","barsy.support","barsy.uk","*.magentosite.cloud","mayfirst.info","mayfirst.org","hb.cldmail.ru","miniserver.com","memset.net","cloud.metacentrum.cz","custom.metacentrum.cz","flt.cloud.muni.cz","usr.cloud.muni.cz","meteorapp.com","eu.meteorapp.com","co.pl","azurecontainer.io","azurewebsites.net","azure-mobile.net","cloudapp.net","mozilla-iot.org","bmoattachments.org","net.ru","org.ru","pp.ru","bitballoon.com","netlify.com","4u.com","ngrok.io","nh-serv.co.uk","nfshost.com","dnsking.ch","mypi.co","n4t.co","001www.com","ddnslive.com","myiphost.com","forumz.info","16-b.it","32-b.it","64-b.it","soundcast.me","tcp4.me","dnsup.net","hicam.net","now-dns.net","ownip.net","vpndns.net","dynserv.org","now-dns.org","x443.pw","now-dns.top","ntdll.top","freeddns.us","crafting.xyz","zapto.xyz","nsupdate.info","nerdpol.ovh","blogsyte.com","brasilia.me","cable-modem.org","ciscofreak.com","collegefan.org","couchpotatofries.org","damnserver.com","ddns.me","ditchyourip.com","dnsfor.me","dnsiskinky.com","dvrcam.info","dynns.com","eating-organic.net","fantasyleague.cc","geekgalaxy.com","golffan.us","health-carereform.com","homesecuritymac.com","homesecuritypc.com","hopto.me","ilovecollege.info","loginto.me","mlbfan.org","mmafan.biz","myactivedirectory.com","mydissent.net","myeffect.net","mymediapc.net","mypsx.net","mysecuritycamera.com","mysecuritycamera.net","mysecuritycamera.org","net-freaks.com","nflfan.org","nhlfan.net","no-ip.ca","no-ip.co.uk","no-ip.net","noip.us","onthewifi.com","pgafan.net","point2this.com","pointto.us","privatizehealthinsurance.net","quicksytes.com","read-books.org","securitytactics.com","serveexchange.com","servehumour.com","servep2p.com","servesarcasm.com","stufftoread.com","ufcfan.org","unusualperson.com","workisboring.com","3utilities.com","bounceme.net","ddns.net","ddnsking.com","gotdns.ch","hopto.org","myftp.biz","myftp.org","myvnc.com","no-ip.biz","no-ip.info","no-ip.org","noip.me","redirectme.net","servebeer.com","serveblog.net","servecounterstrike.com","serveftp.com","servegame.com","servehalflife.com","servehttp.com","serveirc.com","serveminecraft.net","servemp3.com","servepics.com","servequake.com","sytes.net","webhop.me","zapto.org","stage.nodeart.io","nodum.co","nodum.io","pcloud.host","nyc.mn","nom.ae","nom.af","nom.ai","nom.al","nym.by","nym.bz","nom.cl","nom.gd","nom.ge","nom.gl","nym.gr","nom.gt","nym.gy","nom.hn","nym.ie","nom.im","nom.ke","nym.kz","nym.la","nym.lc","nom.li","nym.li","nym.lt","nym.lu","nym.me","nom.mk","nym.mn","nym.mx","nom.nu","nym.nz","nym.pe","nym.pt","nom.pw","nom.qa","nym.ro","nom.rs","nom.si","nym.sk","nom.st","nym.su","nym.sx","nom.tj","nym.tw","nom.ug","nom.uy","nom.vc","nom.vg","cya.gg","cloudycluster.net","nid.io","opencraft.hosting","operaunite.com","outsystemscloud.com","ownprovider.com","own.pm","ox.rs","oy.lc","pgfog.com","pagefrontapp.com","art.pl","gliwice.pl","krakow.pl","poznan.pl","wroc.pl","zakopane.pl","pantheonsite.io","gotpantheon.com","mypep.link","on-web.fr","*.platform.sh","*.platformsh.site","xen.prgmr.com","priv.at","protonet.io","chirurgiens-dentistes-en-france.fr","byen.site","ras.ru","qa2.com","dev-myqnapcloud.com","alpha-myqnapcloud.com","myqnapcloud.com","*.quipelements.com","vapor.cloud","vaporcloud.io","rackmaze.com","rackmaze.net","rhcloud.com","resindevice.io","devices.resinstaging.io","hzc.io","wellbeingzone.eu","ptplus.fit","wellbeingzone.co.uk","sandcats.io","logoip.de","logoip.com","schokokeks.net","scrysec.com","firewall-gateway.com","firewall-gateway.de","my-gateway.de","my-router.de","spdns.de","spdns.eu","firewall-gateway.net","my-firewall.org","myfirewall.org","spdns.org","*.s5y.io","*.sensiosite.cloud","biz.ua","co.ua","pp.ua","shiftedit.io","myshopblocks.com","1kapp.com","appchizi.com","applinzi.com","sinaapp.com","vipsinaapp.com","bounty-full.com","alpha.bounty-full.com","beta.bounty-full.com","static.land","dev.static.land","sites.static.land","apps.lair.io","*.stolos.io","spacekit.io","customer.speedpartner.de","storj.farm","utwente.io","temp-dns.com","diskstation.me","dscloud.biz","dscloud.me","dscloud.mobi","dsmynas.com","dsmynas.net","dsmynas.org","familyds.com","familyds.net","familyds.org","i234.me","myds.me","synology.me","vpnplus.to","taifun-dns.de","gda.pl","gdansk.pl","gdynia.pl","med.pl","sopot.pl","gwiddle.co.uk","cust.dev.thingdust.io","cust.disrec.thingdust.io","cust.prod.thingdust.io","cust.testing.thingdust.io","bloxcms.com","townnews-staging.com","12hp.at","2ix.at","4lima.at","lima-city.at","12hp.ch","2ix.ch","4lima.ch","lima-city.ch","trafficplex.cloud","de.cool","12hp.de","2ix.de","4lima.de","lima-city.de","1337.pictures","clan.rip","lima-city.rocks","webspace.rocks","lima.zone","*.transurl.be","*.transurl.eu","*.transurl.nl","tuxfamily.org","dd-dns.de","diskstation.eu","diskstation.org","dray-dns.de","draydns.de","dyn-vpn.de","dynvpn.de","mein-vigor.de","my-vigor.de","my-wan.de","syno-ds.de","synology-diskstation.de","synology-ds.de","uber.space","*.uberspace.de","hk.com","hk.org","ltd.hk","inc.hk","virtualuser.de","virtual-user.de","lib.de.us","2038.io","router.management","v-info.info","wedeploy.io","wedeploy.me","wedeploy.sh","remotewd.com","wmflabs.org","half.host","xnbay.com","u2.xnbay.com","u2-local.xnbay.com","cistron.nl","demon.nl","xs4all.space","official.academy","yolasite.com","ybo.faith","yombo.me","homelink.one","ybo.party","ybo.review","ybo.science","ybo.trade","nohost.me","noho.st","za.net","za.org","now.sh","zone.id"]
},{}],2:[function(require,module,exports){
/*eslint no-var:0, prefer-arrow-callback: 0, object-shorthand: 0 */
'use strict';


var Punycode = require('punycode');


var internals = {};


//
// Read rules from file.
//
internals.rules = require('./data/rules.json').map(function (rule) {

  return {
    rule: rule,
    suffix: rule.replace(/^(\*\.|\!)/, ''),
    punySuffix: -1,
    wildcard: rule.charAt(0) === '*',
    exception: rule.charAt(0) === '!'
  };
});


//
// Check is given string ends with `suffix`.
//
internals.endsWith = function (str, suffix) {

  return str.indexOf(suffix, str.length - suffix.length) !== -1;
};


//
// Find rule for a given domain.
//
internals.findRule = function (domain) {

  var punyDomain = Punycode.toASCII(domain);
  return internals.rules.reduce(function (memo, rule) {

    if (rule.punySuffix === -1){
      rule.punySuffix = Punycode.toASCII(rule.suffix);
    }
    if (!internals.endsWith(punyDomain, '.' + rule.punySuffix) && punyDomain !== rule.punySuffix) {
      return memo;
    }
    // This has been commented out as it never seems to run. This is because
    // sub tlds always appear after their parents and we never find a shorter
    // match.
    //if (memo) {
    //  var memoSuffix = Punycode.toASCII(memo.suffix);
    //  if (memoSuffix.length >= punySuffix.length) {
    //    return memo;
    //  }
    //}
    return rule;
  }, null);
};


//
// Error codes and messages.
//
exports.errorCodes = {
  DOMAIN_TOO_SHORT: 'Domain name too short.',
  DOMAIN_TOO_LONG: 'Domain name too long. It should be no more than 255 chars.',
  LABEL_STARTS_WITH_DASH: 'Domain name label can not start with a dash.',
  LABEL_ENDS_WITH_DASH: 'Domain name label can not end with a dash.',
  LABEL_TOO_LONG: 'Domain name label should be at most 63 chars long.',
  LABEL_TOO_SHORT: 'Domain name label should be at least 1 character long.',
  LABEL_INVALID_CHARS: 'Domain name label can only contain alphanumeric characters or dashes.'
};


//
// Validate domain name and throw if not valid.
//
// From wikipedia:
//
// Hostnames are composed of series of labels concatenated with dots, as are all
// domain names. Each label must be between 1 and 63 characters long, and the
// entire hostname (including the delimiting dots) has a maximum of 255 chars.
//
// Allowed chars:
//
// * `a-z`
// * `0-9`
// * `-` but not as a starting or ending character
// * `.` as a separator for the textual portions of a domain name
//
// * http://en.wikipedia.org/wiki/Domain_name
// * http://en.wikipedia.org/wiki/Hostname
//
internals.validate = function (input) {

  // Before we can validate we need to take care of IDNs with unicode chars.
  var ascii = Punycode.toASCII(input);

  if (ascii.length < 1) {
    return 'DOMAIN_TOO_SHORT';
  }
  if (ascii.length > 255) {
    return 'DOMAIN_TOO_LONG';
  }

  // Check each part's length and allowed chars.
  var labels = ascii.split('.');
  var label;

  for (var i = 0; i < labels.length; ++i) {
    label = labels[i];
    if (!label.length) {
      return 'LABEL_TOO_SHORT';
    }
    if (label.length > 63) {
      return 'LABEL_TOO_LONG';
    }
    if (label.charAt(0) === '-') {
      return 'LABEL_STARTS_WITH_DASH';
    }
    if (label.charAt(label.length - 1) === '-') {
      return 'LABEL_ENDS_WITH_DASH';
    }
    if (!/^[a-z0-9\-]+$/.test(label)) {
      return 'LABEL_INVALID_CHARS';
    }
  }
};


//
// Public API
//


//
// Parse domain.
//
exports.parse = function (input) {

  if (typeof input !== 'string') {
    throw new TypeError('Domain name must be a string.');
  }

  // Force domain to lowercase.
  var domain = input.slice(0).toLowerCase();

  // Handle FQDN.
  // TODO: Simply remove trailing dot?
  if (domain.charAt(domain.length - 1) === '.') {
    domain = domain.slice(0, domain.length - 1);
  }

  // Validate and sanitise input.
  var error = internals.validate(domain);
  if (error) {
    return {
      input: input,
      error: {
        message: exports.errorCodes[error],
        code: error
      }
    };
  }

  var parsed = {
    input: input,
    tld: null,
    sld: null,
    domain: null,
    subdomain: null,
    listed: false
  };
  console.log(parsed);
  var domainParts = domain.split('.');

  // Non-Internet TLD
  if (domainParts[domainParts.length - 1] === 'local') {
    return parsed;
  }

  var handlePunycode = function () {

    if (!/xn--/.test(domain)) {
      return parsed;
    }
    if (parsed.domain) {
      parsed.domain = Punycode.toASCII(parsed.domain);
    }
    if (parsed.subdomain) {
      parsed.subdomain = Punycode.toASCII(parsed.subdomain);
    }
    return parsed;
  };

  var rule = internals.findRule(domain);

  // Unlisted tld.
  if (!rule) {
    if (domainParts.length < 2) {
      return parsed;
    }
    parsed.tld = domainParts.pop();
    parsed.sld = domainParts.pop();
    parsed.domain = [parsed.sld, parsed.tld].join('.');
    if (domainParts.length) {
      parsed.subdomain = domainParts.pop();
    }
    return handlePunycode();
  }

  // At this point we know the public suffix is listed.
  parsed.listed = true;
  console.log(parsed);

  var tldParts = rule.suffix.split('.');
  var privateParts = domainParts.slice(0, domainParts.length - tldParts.length);

  if (rule.exception) {
    privateParts.push(tldParts.shift());
  }

  parsed.tld = tldParts.join('.');

  if (!privateParts.length) {
    return handlePunycode();
  }

  if (rule.wildcard) {
    tldParts.unshift(privateParts.pop());
    parsed.tld = tldParts.join('.');
  }

  if (!privateParts.length) {
    return handlePunycode();
  }

  parsed.sld = privateParts.pop();
  parsed.domain = [parsed.sld,  parsed.tld].join('.');

  if (privateParts.length) {
    parsed.subdomain = privateParts.join('.');
  }
  // console.log(handlePunycode());
  return handlePunycode();
};


//
// Get domain.
//
exports.get = function (domain) {

  if (!domain) {
    return null;
  }
  return exports.parse(domain).domain || null;
};


//
// Check whether domain belongs to a known public suffix.
//
exports.isValid = function (domain) {

  var parsed = exports.parse(domain);
  return Boolean(parsed.domain && parsed.listed);
};

},{"./data/rules.json":1,"punycode":3}],3:[function(require,module,exports){
(function (global){
/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define('punycode', function() {
			return punycode;
		});
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[2])(2)
});
