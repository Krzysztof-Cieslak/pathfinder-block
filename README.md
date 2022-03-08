# Pathfinder-block

Blocks + LSIF

### Examples

Minimally (and manually) tested for:

- Typescript (some duplicated information/tooltips - conflict with the built-in TS/JS tooling in monaco):

  - Sample file: https://github.com/ionide/LSIF-Reader/blob/main/src/reader.ts
  - Repo: https://github.com/ionide/LSIF-Reader
  - LSIF generation: https://github.com/ionide/LSIF-Reader/blob/main/.github/workflows/lsif.yml

- Rust

  - Sample file: https://github.com/Krzysztof-Cieslak/RustSample/blob/main/src/main.rs
  - Repo: https://github.com/Krzysztof-Cieslak/RustSample
  - LSIF generation: https://github.com/Krzysztof-Cieslak/RustSample/blob/main/.github/workflows/lsif.yml

- Go

  - Sample file: https://github.com/Krzysztof-Cieslak/GoSample/blob/main/main.go
  - Repo: https://github.com/Krzysztof-Cieslak/GoSample
  - LSIF generation: https://github.com/Krzysztof-Cieslak/GoSample/blob/main/.github/workflows/lsif.yml

- Dart (tooltips formatting seems off)

  - Sample file: https://github.com/Krzysztof-Cieslak/DartSample/blob/main/lib/server.dart
  - Repo: https://github.com/Krzysztof-Cieslak/DartSample
  - LSIF generation: https://github.com/Krzysztof-Cieslak/DartSample/blob/main/.github/workflows/lsif.yml

- C#

  - Sample file: https://github.com/Krzysztof-Cieslak/CSharpSample/blob/main/Program.cs
  - Repo: https://github.com/Krzysztof-Cieslak/CSharpSample
  - LSIF generation: https://github.com/Krzysztof-Cieslak/CSharpSample/blob/main/.github/workflows/lsif.yml

### TODO

- Figure out cross-file navigation story
- Add more providers
- Investigate how to turn off default JS/TS tooling in monaco
