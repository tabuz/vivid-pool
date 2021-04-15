---
name: Początkujący
category: essentials
order: 0
---

## Czym jest blockchain?

**Don’t Trust, Verify**

Blockchain jest zdecentralizowaną bazą danych (tzw. ledger), która rejestruje transakcje. Wszystkie transakcje można w bardzo łatwy i przejrzysty sposób śledzić za pomocą własnego węzła (z ang. node) lub też za pomocą wyszukiwarek blockchain takich jak Cardanoscan. Aby transakcja została dodana do blockchain potrzebna jest autoryzacja, a ta jest dokonywana przez większość użytkowników sieci. Jeśli transakcja nie wzbudza żadnych podejrzeń jest ona dodawana do sieci. 

Technologia blockchain umożliwiła stworzenie kryptowaluty Bitcoin. Główną cechą dzięki której było to możliwe jest niezmienność (brak możliwości edycji dokonanej transakcji). Ta funkcja zapobiega sytuacji w której ktoś mógłby zmienić całkowitą liczbę Bitcoinów w obiegu bez uzyskania zgody większości użytkowników sieci. Gdyby nie ta cecha organy centralne mogłyby w łatwy sposób zmienić liczbę czy też “dodrukować” więcej kryptowaluty nie licząc się z opinią wszystkich pozostałych członków sieci, czy nie tak właśnie postępuje NBP ?

Powiedzmy, że połowa populacji kraju “A” uważa, że wybory zostały sfałszowane. Podłoże problemu leży w braku zaufania do rządów. Dzięki technologii blockchain można rozwiązać tą kwestię w bardzo prosty sposób wystarczy stworzyć odpowiedni mechanizm głosowania. Ponieważ informacja zawarta w blockchainie jest niezmienialna, każda próba ingerencji w sieć zostanie odrzucona przez większość jako nieprawdziwa.

Podany przykład jest bardzo uproszczony. Jeśli chcesz dowiedzieć się więcej, gorąco zachęcamy do zdobycia informacji na własną rękę z szeroko dostępnych źródeł.

## Co to jest block?

Bloki są to inaczej zbiory transakcji, które razem formują blockchain. Każdy blok składa się z informacji o transakcjach, które powinny zostać przeprowadzone. Możesz sobie wyobrazić blok jako pojedynczy stronę z transakcjami, a sam blockchain jako książkę zawierającą w sobie każdą taką pojedynczą stronę. 

## Czym jest waluta krypto?

Kryptowaluta jest to wirtualne aktywo zaprojektowane po to aby dokonywać za jej pośrednictwem wymian. Kryptowaluty przypisane do użytkownika reprezentowane w formie rejestru zapisanego na blockchainie. Zastosowana tutaj kryptografia sprawia, że wymiany między użytkownikami sieci dokonywane są w sposób bezpieczny, bez możliwości przypadkowego stworzenia dodatkowej ilości coinów. W przeciwieństwie do tradycyjnych banków centralnych, kontrola nad kryptowalutami z reguły jest przeprowadzana w sposób zdecentralizowany.

[Cryptocurrency](https://pl.wikipedia.org/wiki/Kryptowaluta)

## Czym jest coin?
Jest to wirtualny zasób charakterystyczny dla danego blockchaina
- dla Cardano blockchain coinem jest ADA
- dla Ethereum blockchain coinem jest ETH
- dla Polkadot blockchain coinem jest DOT
- itd.

## Czym jest token?

Tokenami nazywamy aktywa, które są zbudowane na podstawie innych protokołów. Jako protokół możemy sobie wyobrazić sieć Cardano i wszystkie aktywa stworzone w tej sieci możemy nazwać tokenami. Większość protokołów korzysta z tzw. smart contracts w celu stworzenia tokenów.

## Czym jest Proof-of-Work?

Proof of work (PoW) jest to rodzaj użytego algorytmu konsensusu wykorzystywanego w blockchainie. Polega on na tym, że podłączone węzły (tj. komputery, serwery itd.), aby dodać do sieci blok muszą rozwiązać bardzo czasochłonne zagadnienie kryptograficzny. Pierwszy węzeł, który tego dokona otrzymuje wynagrodzenie. Z tego właśnie powodu węzły znajdujące się w sieci rywalizują między sobą o bycie pierwszym i zdobycie nagrody. Osoby, które podejmują się rozwiązania tego zagadnienia kryptograficznego nazywamy potocznie górnikami (z ang. miners). Przykładem zastosowania PoW jest Bitcoin.

## Czym jest Proof-of-Stake?

Proof of Stake (POS) jest to rodzaj użytego algorytmu konsensusu wykorzystywanego w blockchainie. Pozwala on użytkownikom sieci na staking coinów w celu dodania nowych bloków do sieci. Jego celem jest zastąpienie mało efektywnego konceptu proof of work w którym to dodanie nowych bloków opiera się na mocy obliczeniowej urządzenia. W przeciwieństwie do PoW, proof of stake nie wymaga ogromnych nakładów energii elektrycznej w celu zapewnienia konsensusu pomiędzy węzłami. 

## Czym jest stake pool?

Stake poole są tworzone przez doświadczonych operatorów posiadających wystarczającą wiedzę i środki do stworzenia odpowiedniego węzła. Posiadacze coinów mogą delegować swoje środki dla wybranego stake poola jeśli nie chcą lub nie są w stanie zrobić węzła w sieci Cardano we własnym zakresie.
Im więcej coinów jest oddelegowanych tym większa szansa na to, że wybrany stake pool zostanie wyznaczony jako slot leader. Za każdym razem kiedy pool zostaje wybrany produkuje on bloki, które następnie są akceptowane przez blockchain i za które stake pool otrzymuje wynagrodzenie. Nagroda ta zostaje następnie rozdzielona pomiędzy operatora stake poola i osoby delegujące. Można sobie wyobrazić tą sytuacje jako odsetki które są wypłacane co 5 dni. 
Operatorzy stake pooli pobierają niewielkie opłaty, które służą do utrzymania stake poola. W przypadku Vivid Pool taka opłata wynosi 2.9% 