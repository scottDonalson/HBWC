package rocks.hbwc.backend.repos;


import org.springframework.data.jpa.repository.JpaRepository;
import rocks.hbwc.backend.models.Wrestler;

/**
 * @author ksdon
 **/
public interface WrestlerRepository extends JpaRepository<Wrestler, Long> {}

