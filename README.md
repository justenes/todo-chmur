Aplikacja Todo

Ten projekt to **aplikacja do zarządzania zadaniami (To-Do)** stworzona przy użyciu **React, Node.js, Express i Docker**.
Użytkownicy mogą dodawać, oznaczać jako ukończone i usuwać zadania. **Docker Compose** pozwala na uruchomienie całego systemu jednym poleceniem.

---

## Jak uruchomić projekt

Wykonaj poniższe kroki, aby pobrać projekt z GitHuba i uruchomić go za pomocą Dockera.

### Pobierz repozytorium z GitHuba
```
git clone https://github.com/justenes/todo-chmur.git
```


### Przejdź do katalogu projektu
```
cd todo-chmur
```

### Uruchom projekt za pomocą Dockera
```
docker compose up --build
```

**Jeśli wszystko działa poprawnie, aplikację można otworzyć pod następującymi adresami:**
- **Frontend:**  [http://localhost:3000](http://localhost:3000)
- **Backend API:**  [http://localhost:5000/tasks](http://localhost:5000/tasks)

---

##  Struktura projektu
```
 todo-mern-docker
│--  backend       # Node.js & Express API
│--  frontend      # Aplikacja React
│--  README.md     # Dokumentacja projektu
│--  docker-compose.yml  # Konfiguracja Dockera
```

---

##  Wykorzystane technologie

| Technologia  | Opis |
|--------------|------|
| **React** | Interfejs użytkownika |
| **Node.js** | Backend |
| **Express.js** | Framework API |
| **Docker & Docker Compose** | Zarządzanie kontenerami |
| **MongoDB (Opcjonalnie)** | Baza danych |

---

##  Endpointy API
Aplikacja udostępnia następujące REST API:

| Metoda HTTP | Endpoint | Opis |
|-------------|---------|------|
| **GET**    | `/tasks` | Pobiera wszystkie zadania |
| **POST**   | `/tasks` | Dodaje nowe zadanie |
| **DELETE** | `/tasks/:id` | Usuwa wybrane zadanie |
| **PUT**    | `/tasks/:id` | Aktualizuje zadanie |

---

##  Korzystanie z Dockera

Jeśli chcesz zatrzymać kontenery Dockera:
```
docker compose down
```

Jeśli chcesz wyczyścić system Dockera:
```
docker system prune -a
```

---

##  Link do GitHuba
Projekt można znaleźć na GitHubie:
 **[Repozytorium GitHub](https://github.com/justenes/todo-chmur)**



