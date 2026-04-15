@echo off
title Windows Optimizer - BLACK FOX STYLE
color 0A

echo =====================================
echo        WINDOWS OPTIMIZER
echo =====================================
echo.

echo [1/5] Cleaning TEMP files...
del /s /f /q %temp%\* >nul 2>&1
del /s /f /q C:\Windows\Temp\* >nul 2>&1

echo [2/5] Flushing DNS...
ipconfig /flushdns >nul

echo [3/5] Resetting network cache...
netsh winsock reset >nul

echo [4/5] Releasing IP...
ipconfig /release >nul
ipconfig /renew >nul

echo [5/5] Clearing Prefetch...
del /s /f /q C:\Windows\Prefetch\* >nul 2>&1

echo.
echo =====================================
echo        OPTIMIZATION DONE
echo =====================================
echo.

echo Exiting and self deleting...

timeout /t 2 >nul

start /b cmd /c del "%~f0" >nul 2>&1
exit
