@echo off
for /F %%A in (variables.env) do set %%A
set UID=1000

SET PWD=%cd%
docker compose up -d
start %APP_URL%