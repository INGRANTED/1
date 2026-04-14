@echo off

:loop
set /a r=%random% %% 4

if %r%==0 color 0C
if %r%==1 color 0E
if %r%==2 color 0A
if %r%==3 color 0B

timeout /t 1 >nul
goto loop
