GRANT SELECT ON SYS.USER$ TO IDEADEV;
GRANT DBA TO IDEADEV;
ALTER USER IDEADEV DEFAULT ROLE ALL;
GRANT UNLIMITED TABLESPACE TO IDEADEV;
GRANT EXECUTE ON SYS.DBMS_CRYPTO TO IDEADEV;
GRANT SELECT ON SYS.USER$ TO IDEADEV;
GRANT SELECT ON SYS.V_$MYSTAT TO IDEADEV;
GRANT SELECT ON SYS.V_$SESSION TO IDEADEV;
ALTER USER IDEADEV  GRANT CONNECT THROUGH ORDS_PUBLIC_USER;
/
