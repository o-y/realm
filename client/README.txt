- client/

provides the frontend interface and public entrypoint to Realm.

  - project setup
  $ npm install

  - compiles and hot-reloads for development
  $ npm run serve

  - compiles and minifies for production
  $ npm run build

terminology
  - realms:
    - Gaia:  land, sea and structures, default Realm entrypoint.
    - Minos: the interior plane of above-world structures.
  - services:
    - Atlas: oversees realm generation.
    - Prometheus: creates avatars
      - data/Avatar               /---> stores the positions of local and remote
      - data/AvatarController  --/      avatars, determines which bounds to
                                        generate.
      - render/LocalAvatarRender    -------> renders the local avatar, listens to
                                        keyboard input events, etc.
    - Mercury: handles real-time avatar movement and orchestration across peers.
    - Supabase
      - auth:     handles authentication.
      - peer:     maintains state of Realm users (decoupled from auth).
      - database: provides utilities to query and mutate the Postgres DB.

  - Nyx: support framework for Phaser