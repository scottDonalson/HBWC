package rocks.hbwc.hbwc_spring_react.data.repositories;

import org.springframework.data.repository.CrudRepository;
import rocks.hbwc.hbwc_spring_react.data.entities.WrestlerEntity;

/**
 * @author ksdon
 **/
public interface WrestlerRepository extends CrudRepository<WrestlerEntity, Long> {
    WrestlerEntity findByEmail(String email);
}
