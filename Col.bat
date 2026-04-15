@echo off
:loop
set /a r=%random% %% 16
color 0%r%
timeout /t 0 >nul
goto loop
