Javassa "linttaamisen" pystyy suorittamaan checkstyle kirjastolla, tarvitsee vain määritellä checkstyle.xml tiedostoon konfiguraatiot ja ne voi ajaa terminaalissa esim komennolla gradle checkstyle (mikäli kyseessä gradle projekti). Testaamiseen on useita erilaisia työkaluja. Yksikkötestaamista varten yleinen ja helppokäyttöinen kirjasto on junit. Testien rivikattavuutta voidaan testata esimerkiksi JaCoColla. JaCoCon raporteista näkee mitkä kaikki metodit on testattu ja myös testien haarautumiset, eli testataanko kaikki mahdolliset if else haarojen skenaariot. Kaikki edellä mainitut voidaan tarkistaa github actioneilla. 
Githubin repositorion Actions välilehdeltä pystyy lisäämään "Java with gradle" minkä klikkaaminen avaa tiedoston (oletusarvoiselta nimeltä) gradle.yml. Kyseiseen tiedostoon lisätään konfiguraatiot mitä halutaan repositorioon pushauksen yhteydessä tehdä, kuten ajaa testit palvelimella. Näin jokaisen pushauksen jälkeen nähdään toimiiko koodi vieraalla koneella, eli korjataan "Works on my computer" ongelma. 

On olemassa useita korvaavia vaihtoehtoja github actioneille ja jenkinsille esimerkiksi seuraavat:
CircleCi 
Travis
Trello
GitLab
Azure Pipelines

Projektin luonne määrittelee suurelta osalta kuinka ci / cd tulisi toteuttaa. Mikäli kyseessä on pieni tai lyhyt projekti, ehdottomasti kannattaa ottaa käyttöön vähemmällä vaivalla konfiguroitava pilvipalvelimessa toimiva pipeline, esimerkiksi github actions tai circleci. Mikäli kyseessä taas on suurempi tai pitkäkestoisempi projekti, voi olla parempi ratkaisu ottaa käyttöön Jenkins, millä pystyy vapaammin määrittelemään toiminta ympäristön. Jenkinsin käyttöönotto on huomattavasti monimutkaisempaa kuin esim github actioneiden joten ei välttämättä ole perusteltua nähdä paljon vaivaa tarkkoihin konfigurointeihin jos projekti on ohi nopeasti.
