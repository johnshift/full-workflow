package dev.johnshift.api.user;

/** . */
public class UserException extends RuntimeException {

  public static final String NOT_FOUND = "User not found";

  public UserException(String msg) {
    super(msg);
  }
}
